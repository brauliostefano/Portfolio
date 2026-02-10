/**
 * @copyright 2024 Braulio Stefano
 * @license Apache-2.0
 */

/**
 * Components
 */

import SkillsCard from './SkillsCard';

const skillItem = [
  // --- TIER 1: The Heavy Hitters (Arquitectura) ---
  {
    imgSrc: '/images/next.svg',
    label: 'Next.js',
    desc: 'App Architecture',
  },
  {
    imgSrc: '/images/Typescript.svg',
    label: 'TypeScript',
    desc: 'Type Safety',
  },
  {
    imgSrc: '/images/openai.svg',
    label: 'OpenAI API',
    desc: 'LLM Integration',
  },

  // --- TIER 2: The Core Stack (Full Stack) ---
  {
    imgSrc: '/images/react.svg',
    label: 'React',
    desc: 'UI Library',
  },
  {
    imgSrc: '/images/nodejs.svg',
    label: 'Node.js',
    desc: 'Backend Runtime',
  },
  {
    imgSrc: '/images/cloudflare.svg',
    label: 'Cloudflare',
    desc: 'Edge & Security',
  },

  // --- TIER 3: Web3 & Data (Especialización) ---
  {
    imgSrc: '/images/Ethereum.svg',
    label: 'Ethereum',
    desc: 'EVM Architecture',
  },
  {
    imgSrc: '/images/mongodb.svg',
    label: 'MongoDB',
    desc: 'Scalable Database',
  },

  // --- TIER 4: Tools & Design (Soporte) ---
  {
    imgSrc: '/images/tailwindcss.svg',
    label: 'TailwindCSS',
    desc: 'Design System',
  },
  {
    imgSrc: '/images/figma.svg',
    label: 'Figma',
    desc: 'UI/UX Design',
  },
  {
    imgSrc: '/images/adobe.svg', // ¡NUEVO! Cubre Premiere, PS, Lightroom
    label: 'Adobe CC',
    desc: 'Multimedia Creation',
  },
];

const Skills = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Essential Tools I use</h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillsCard
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
