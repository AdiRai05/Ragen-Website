export interface TechCategory {
  name: string;
  items: string[];
}

export const techStack: TechCategory[] = [
  {
    name: 'Frontend',
    items: ['React', 'Next.js', 'Vue', 'Svelte', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'React Native'],
  },
  {
    name: 'Backend',
    items: ['Node.js', 'Python', 'Go', '.NET', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL'],
  },
  {
    name: 'Infrastructure',
    items: ['AWS', 'GCP', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Vercel'],
  },
  {
    name: 'AI & Data',
    items: ['OpenAI', 'LangChain', 'Vector DBs', 'FastAPI', 'Python', 'RAG', 'Fine-tuning', 'Agents'],
  },
];
