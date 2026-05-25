export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'We listen first. Then we push back.',
    description:
      'Most agencies nod along and say yes to everything. We do not. The first conversation is about what you are actually trying to accomplish — not what you think you need built.',
  },
  {
    number: '02',
    title: 'Scope it honestly. Price it fairly.',
    description:
      'We write scopes detailed enough to be useful and honest enough to include the unknowns. Fixed-price where scope is clear. Time-and-materials where it is not.',
  },
  {
    number: '03',
    title: 'Design before we code. Always.',
    description:
      'Every project starts with design. Wireframes, user flows, high-fidelity mockups. We get alignment before anyone writes a line of code. Changes are cheap in Figma. They are expensive in production.',
  },
  {
    number: '04',
    title: 'Build in the open. Ship every week.',
    description:
      'You get access to the repo, the project board, and staging from day one. Every Friday, there is something new to see. No waiting six weeks for a big reveal that misses the mark.',
  },
  {
    number: '05',
    title: 'Hand off like adults.',
    description:
      'Clean documentation. Runbooks for deployment. Architecture decision records. If you have an internal team, they will understand everything. If you do not, we will keep running it for you.',
  },
];
