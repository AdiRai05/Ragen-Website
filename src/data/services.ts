export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  features: string[];
  techTags: string[];
  idealFor: string;
  slug: string;
}

export const services: Service[] = [
  {
    id: 'web-development',
    number: '01',
    title: 'Custom Web Development',
    description:
      'Full-stack web applications built with modern frameworks. Not brochure sites — real software that runs businesses. Dashboards, marketplaces, internal tools, and customer portals.',
    features: [
      'React, Next.js, Vue, and Svelte on the frontend',
      'Node, Python, Go, or .NET on the backend',
      'REST and GraphQL APIs designed for real traffic',
      'Auth, caching, and monitoring from day one',
    ],
    techTags: ['React', 'Next.js', 'Vue', 'Node.js', 'Python', 'PostgreSQL', 'GraphQL'],
    idealFor: 'Companies that need a technical partner, not just a dev shop.',
    slug: 'web-development',
  },
  {
    id: 'saas-development',
    number: '02',
    title: 'SaaS Development',
    description:
      'Multi-tenant platforms, subscription engines, and B2B products. We have built SaaS from napkin to revenue and inherited codebases that needed a second life.',
    features: [
      'Multi-tenant architecture and tenant isolation',
      'Subscription management with Stripe, Paddle, or Chargebee',
      'Usage-based billing and metering systems',
      'Onboarding flows that actually convert',
    ],
    techTags: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis', 'Docker'],
    idealFor: 'Startups launching v1 and established companies scaling past product-market fit.',
    slug: 'saas-development',
  },
  {
    id: 'mobile-development',
    number: '03',
    title: 'Mobile Applications',
    description:
      'iOS and Android apps — native where it matters, cross-platform where it does not. Consumer-facing products, field-force tools, and companion apps for SaaS platforms.',
    features: [
      'Swift and Kotlin for native development',
      'React Native and Flutter for cross-platform',
      'Offline-first architecture with sync',
      'Push notifications and deep link routing',
    ],
    techTags: ['Swift', 'Kotlin', 'React Native', 'Flutter', 'Firebase', 'Core Data'],
    idealFor: 'Products that need to live in the user pocket, not just on a desktop.',
    slug: 'mobile-development',
  },
  {
    id: 'ui-ux-design',
    number: '04',
    title: 'UI/UX Design',
    description:
      'Interface design that is beautiful and functional. Design systems, component libraries, and interaction patterns that scale across products. No lorem ipsum portfolios.',
    features: [
      'End-to-end product design from wireframes to high-fidelity mockups',
      'Design systems with tokens, components, and documentation',
      'User research, journey mapping, and usability testing',
      'Interaction design and micro-animations',
    ],
    techTags: ['Figma', 'Design Systems', 'Prototyping', 'User Research', 'WCAG'],
    idealFor: 'Teams that need design leadership, not just pixel-pushing.',
    slug: 'ui-ux-design',
  },
  {
    id: 'ai-integrations',
    number: '05',
    title: 'AI Solutions & Automation',
    description:
      'LLM-powered features, RAG pipelines, intelligent agents, and workflow automation that actually ships to production — not just demos. We have been building with AI since GPT-3.',
    features: [
      'LLM-powered chat, search, and content generation',
      'RAG pipelines connecting models to your data',
      'Intelligent workflow automation and agents',
      'Fine-tuning and custom model deployment',
    ],
    techTags: ['OpenAI', 'LangChain', 'Vector DBs', 'Python', 'FastAPI', 'RAG'],
    idealFor: 'Companies that want AI that ships, not AI that makes a good demo video.',
    slug: 'ai-integrations',
  },
  {
    id: 'cloud-devops',
    number: '06',
    title: 'Cloud & DevOps',
    description:
      'AWS, GCP, or Azure — architected for what you actually need, not what generates the biggest bill. CI/CD pipelines, container orchestration, and observability that makes sense.',
    features: [
      'Cloud architecture and migration',
      'CI/CD pipelines with GitHub Actions or GitLab CI',
      'Docker and Kubernetes orchestration',
      'Monitoring, alerting, and incident response',
    ],
    techTags: ['AWS', 'GCP', 'Azure', 'Docker', 'K8s', 'Terraform', 'Datadog'],
    idealFor: 'Teams that need infrastructure that scales without the ops headache.',
    slug: 'cloud-devops',
  },
];
