const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const CSV_PATH = path.join(__dirname, '..', 'ragen', 'ireland-leads-master.csv');
const OUTPUT_PATH = path.join(__dirname, '..', 'ragen', 'ireland-email-list.csv');

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

function fetchPage(url) {
  return new Promise((resolve) => {
    const client = url.startsWith('https') ? https : http;
    const req = client.get(url, { timeout: 10000, headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if ([301, 302, 307, 308].includes(res.statusCode) && res.headers.location) {
        const redirect = res.headers.location;
        if (!redirect.startsWith('http')) {
          const u = new URL(url);
          resolve(fetchPage(u.origin + redirect));
        } else {
          resolve(fetchPage(redirect));
        }
        return;
      }
      let body = '';
      res.on('data', chunk => body += chunk.toString());
      res.on('end', () => resolve({ url, body, status: res.statusCode }));
    });
    req.on('error', () => resolve({ url, body: '', status: 0 }));
    req.on('timeout', () => { req.destroy(); resolve({ url, body: '', status: 0 }); });
  });
}

function extractEmails(body, businessName) {
  const emails = [];
  const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
  let match;
  while ((match = emailRegex.exec(body)) !== null) {
    const email = match[1].toLowerCase();
    // Filter out common false positives
    if (email.includes('example') || email.includes('test@') || email.includes('domain.com')) continue;
    if (email.includes('wixpress') || email.includes('sentry') || email.includes('microsoft')) continue;
    if (email.includes('google') || email.includes('facebook') || email.includes('github')) continue;
    if (email.includes('jquery') || email.includes('bootstrap') || email.includes('@example')) continue;
    if (!emails.includes(email)) emails.push(email);
  }
  return emails;
}

function findBestEmail(emails, businessName) {
  if (emails.length === 0) return '';

  // Prefer emails matching business name
  const nameSlug = businessName.toLowerCase().replace(/[^a-z0-9]/g, '');
  for (const email of emails) {
    const localPart = email.split('@')[0];
    if (localPart.includes('info') || localPart.includes('hello') || localPart.includes('contact')) return email;
  }
  // Then prefer any with business name hint
  for (const email of emails) {
    if (email.includes(nameSlug.substring(0, 5))) return email;
  }
  // Otherwise first one
  return emails[0];
}

(async () => {
  const csvText = fs.readFileSync(CSV_PATH, 'utf-8');
  const businesses = parseCSV(csvText);
  console.log(`Loaded ${businesses.length} businesses`);

  // Known website URLs from audit
  const knownSites = {
    'Andhra Bhavan': 'https://www.andhrabhavan.ie',
    'Chapter One': 'https://chapter-one.com/',
    'Frank\'s': 'https://www.franks.ie',
    'Etto': 'https://www.etto.ie',
    'Uno Mas': 'https://www.unomas.ie',
    'Achara': 'https://www.achara.com',
    'Kicky\'s': 'https://kickys.ie/',
    'Fable Bakery': 'https://fablebakery.com/',
    'Kaph': 'https://kaph.ie/',
    'Kehoe\'s': 'https://kehoes.ie',
    'O\'Donoghue\'s': 'https://www.odonoghues.ie',
    'Caribou': 'https://caribou.com/',
    'Hong Kong Wonton': 'https://hongkongwonton.ie/',
    'The Pig\'s Ear': 'https://www.thepigsear.ie',
    'Library Street': 'https://www.librarystreet.com',
    'Liath': 'https://liath.com/',
    'Una Bakery': 'https://unabakery.ie/',
    'Reggie\'s Pizza': 'https://www.reggies-pizza.com',
    'Kodiak': 'https://kodiak.com/',
    'Pickle': 'https://www.pickle.com',
    'Slattery\'s': 'https://slatterys.com/',
    'Excuse My French': 'https://excuse-my-french.com/en/',
    'Fish Shop': 'https://fish-shop.ie/',
    'Vada': 'https://vada.com/',
    'Grano': 'https://grano.ie/',
    'Alma': 'https://www.alma.com',
    'Bar Pez': 'https://barpez.ie/',
    'Dash Burger': 'https://www.dashburger.ie',
    'Bastible': 'https://www.bastible.com/',
    'Variety Jones': 'https://www.varietyjones.ie',
    'Xian Street Food': 'https://www.xianstreetfood.ie',
    'Bang': 'https://www.bang.com',
    'I Monelli': 'https://www.imonelli.ie',
    'Rasam': 'https://www.rasam.ie',
    'Daniel\'s': 'https://www.daniels.ie',
    'The Little Kitchen': 'https://www.the-little-kitchen.com',
    'La Caverna': 'https://lacaverna.ie/',
    'Lemon Jelly': 'https://www.lemonjelly.com/en/',
    'Richmond': 'https://richmond.com/',
    'Chez Max': 'https://chezmax.com/',
    'Asian Food': 'https://asianfood.com/',
  };

  const results = [];
  let found = 0;

  for (let i = 0; i < businesses.length; i++) {
    const b = businesses[i];
    const name = b['Business Name'];
    const siteUrl = knownSites[name];

    console.log(`[${i + 1}/${businesses.length}] ${name}...`);

    let emails = [];
    let email = '';

    if (siteUrl) {
      const { body, status } = await fetchPage(siteUrl);
      if (status >= 200 && status < 400 && body) {
        emails = extractEmails(body, name);
        email = findBestEmail(emails, name);
      }
      console.log(`  => Site: ${siteUrl} | ${emails.length} emails found | Best: ${email || 'none'}`);
    } else {
      console.log(`  => No known website, searching...`);
    }

    if (email) found++;

    results.push({
      name,
      category: b.Category,
      cuisine: b['Cuisine/Type'],
      area: b.Area,
      website: siteUrl || '',
      email: email,
      allEmails: emails.join('; '),
      hasEmail: !!email
    });
  }

  // Save
  const header = 'name,category,cuisine,area,website,email,all_emails,has_email';
  const lines = results.map(r => `"${r.name}","${r.category}","${r.cuisine}","${r.area}","${r.website}","${r.email}","${r.allEmails}","${r.hasEmail}"`);
  fs.writeFileSync(OUTPUT_PATH, header + '\n' + lines.join('\n'));

  const withEmail = results.filter(r => r.hasEmail).length;
  const without = results.filter(r => !r.hasEmail).length;
  console.log(`\n=== DONE ===`);
  console.log(`With email: ${withEmail}`);
  console.log(`Without email: ${without}`);
  console.log(`Output: ${OUTPUT_PATH}`);
})();
