const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const CSV_PATH = path.join(__dirname, '..', 'ragen', 'ireland-leads-master.csv');
const OUTPUT_PATH = path.join(__dirname, '..', 'ragen', 'ireland-website-audit.csv');

function parseCSV(text) {
  const lines = text.trim().split('\n');
  const headers = lines[0].split(',');
  const rows = [];
  for (let i = 1; i < lines.length; i++) {
    const vals = lines[i].split(',');
    const row = {};
    headers.forEach((h, j) => row[h.trim()] = (vals[j] || '').trim());
    rows.push(row);
  }
  return rows;
}

function slugify(name) {
  return name.toLowerCase()
    .replace(/&/g, 'and')
    .replace(/'/g, '')
    .replace(/[^a-z0-9]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function checkUrl(url) {
  return new Promise((resolve) => {
    const client = url.startsWith('https') ? https : http;
    const req = client.get(url, { timeout: 8000 }, (res) => {
      // Follow redirects up to 3 hops
      if ([301, 302, 307, 308].includes(res.statusCode) && res.headers.location) {
        const redirect = res.headers.location;
        if (!redirect.startsWith('http')) {
          // Relative redirect
          const u = new URL(url);
          resolve(checkUrl(u.origin + redirect));
        } else {
          resolve(checkUrl(redirect));
        }
        return;
      }
      let body = '';
      res.on('data', chunk => body += chunk.toString());
      res.on('end', () => {
        const text = body.toLowerCase();
        const hasMenu = text.includes('menu');
        const hasBook = text.includes('book') || text.includes('reservation') || text.includes('reserve');
        const isReal = body.length > 500;
        resolve({
          url,
          status: res.statusCode,
          isReal,
          hasMenu,
          hasBook,
          size: body.length
        });
      });
    });
    req.on('error', () => resolve({ url, status: 0, isReal: false, hasMenu: false, hasBook: false, size: 0 }));
    req.on('timeout', () => { req.destroy(); resolve({ url, status: 0, isReal: false, hasMenu: false, hasBook: false, size: 0 }); });
  });
}

async function findWebsite(name) {
  const slug = slugify(name);
  const nameNoSpace = slug.replace(/-/g, '');

  // Generate candidate URLs, prioritising .ie domains
  const candidates = [
    `https://www.${slug}.ie`,
    `https://${slug}.ie`,
    `https://www.${slug}.com`,
    `https://${slug}.com`,
    `https://www.${nameNoSpace}.ie`,
    `https://${nameNoSpace}.ie`,
    `https://www.${nameNoSpace}.com`,
    `https://${nameNoSpace}.com`,
  ];

  // Special handling for common words
  const extras = [];
  if (name.toLowerCase().includes('restaurant')) {
    const s = slug.replace(/-restaurant.*/, '');
    extras.push(`https://www.${s}.ie`, `https://${s}.ie`);
  }

  const allCandidates = [...new Set([...candidates, ...extras])];

  // Try first 4 candidates
  for (let i = 0; i < Math.min(5, allCandidates.length); i++) {
    const result = await checkUrl(allCandidates[i]);
    if (result.status >= 200 && result.status < 400 && result.isReal) {
      return result;
    }
  }

  // If none found, try rest
  for (let i = 5; i < allCandidates.length; i++) {
    const result = await checkUrl(allCandidates[i]);
    if (result.status >= 200 && result.status < 400 && result.isReal) {
      return result;
    }
  }

  return { url: null, status: 0, isReal: false, hasMenu: false, hasBook: false, size: 0 };
}

(async () => {
  const csvText = fs.readFileSync(CSV_PATH, 'utf-8');
  const businesses = parseCSV(csvText);
  console.log(`Loaded ${businesses.length} businesses from CSV`);

  const results = [];
  let found = 0;
  let noSite = 0;

  for (let i = 0; i < businesses.length; i++) {
    const b = businesses[i];
    const pct = Math.round((i / businesses.length) * 100);
    console.log(`[${i + 1}/${businesses.length}] ${pct}% ${b['Business Name']}...`);

    const check = await findWebsite(b['Business Name']);

    const flag = !check.url ? 'NO_SITE' :
                 !check.hasMenu && !check.hasBook ? 'THIN' :
                 'OK';

    if (check.url) found++;
    else noSite++;

    results.push({
      name: b['Business Name'],
      category: b.Category,
      cuisine: b['Cuisine/Type'],
      area: b.Area,
      website: check.url || '',
      status: check.status,
      hasMenu: check.hasMenu,
      hasBooking: check.hasBook,
      flag
    });

    console.log(`  => ${check.url || 'NOT FOUND'} [${flag}] (found: ${found}, missing: ${noSite})`);

    // Save every 10
    if ((i + 1) % 10 === 0) {
      const header = 'name,category,cuisine,area,website,status,hasMenu,hasBooking,flag';
      const lines = results.map(r => `"${r.name}","${r.category}","${r.cuisine}","${r.area}","${r.website}","${r.status}","${r.hasMenu}","${r.hasBooking}","${r.flag}"`);
      fs.writeFileSync(OUTPUT_PATH, header + '\n' + lines.join('\n'));
      console.log(`  [Saved at ${i + 1}]`);
    }
  }

  // Final save
  const header = 'name,category,cuisine,area,website,status,hasMenu,hasBooking,flag';
  const lines = results.map(r => `"${r.name}","${r.category}","${r.cuisine}","${r.area}","${r.website}","${r.status}","${r.hasMenu}","${r.hasBooking}","${r.flag}"`);
  fs.writeFileSync(OUTPUT_PATH, header + '\n' + lines.join('\n'));

  const thin = results.filter(r => r.flag === 'THIN').length;
  const ok = results.filter(r => r.flag === 'OK').length;

  console.log(`\n=== DONE ===`);
  console.log(`Found websites: ${found}`);
  console.log(`No website: ${noSite}`);
  console.log(`THIN (needs work): ${thin}`);
  console.log(`OK: ${ok}`);
  console.log(`Output: ${OUTPUT_PATH}`);
})();
