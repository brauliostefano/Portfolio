/**
 * @copyright 2024 Braulio Stefano
 * @license Apache-2.0
 */
import ProjectCard from './ProjectCard';

const works = [
  {
    imgSrc: '/images/projects/LaCotorrisa.png',
    title: 'La Cotorrisa',
    tags: ['🎨 View Figma Workflow'],
    status: 'Under Construction',
    projectLink:
      'https://www.figma.com/proto/Q4SiXbrRUkgnMX0H7OUKgB/figmaaa?node-id=155-431&p=f&t=p3iTd6BjGgVH4gPW-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=155%3A431',
  },

  // --- TIER 1: The "Wow" Factor (Web3 & International Music) ---
  {
    imgSrc: '/images/projects/LidApp.png',
    title: 'Lid dApp',
    tags: ['Web3', 'Base L2', 'Next.js', 'Privy Auth', 'Wagmi'],
    projectLink: 'https://app.lid.pro/',
  },
  {
    imgSrc: '/images/projects/martingarrix1.png',
    title: 'Martin Garrix Website',
    tags: ['High Traffic', 'React', 'AWS', 'Multimedia', 'GSAP'],
    projectLink: 'https://martingarrix.com/',
  },
  {
    imgSrc: '/images/projects/STMPDRCRDS.png',
    title: 'STMPD RCRDS Studios',
    tags: ['React', 'Headless CMS', 'AWS', 'Framer Motion'],
    projectLink: 'https://www.stmpdstudios.com/',
  },

  // --- TIER 2: Enterprise & Scalable Architectures ---
  {
    imgSrc: '/images/projects/nexxus.png',
    title: 'Nexxus Protocol',
    tags: ['NextJS', 'TailwindCSS', 'Framer Motion', 'Vercel'],

    projectLink: 'https://nexxusprotocol.netlify.app/',
  },
  {
    imgSrc: '/images/projects/AgaveAzul.png',
    title: 'Destileria Agave Azul',
    tags: ['Vercel', 'Vue.js', 'Cloudflare', 'Multilingual', 'Headless CMS'],
    projectLink: 'https://destiladoraagaveazul.mx/en/',
  },
  {
    imgSrc: '/images/projects/LogoSanfer.png',
    title: 'Sanfer Labs Ecosystem',
    tags: ['React', 'Azure DevOps', 'Docker'],
    projectLink: 'https://sanfer.com.mx/',
  },
  {
    imgSrc: '/images/projects/LidSite.png',
    title: 'Lid Landing',
    tags: ['Brand Identity', 'Next.js', 'TailwindCSS', 'Vercel'],
    projectLink: 'https://lid.pro/',
  },
  {
    imgSrc: '/images/projects/TecnologicoDeMonterrey.png',
    title: 'Tecnológico de Monterrey',
    tags: ['Refactoring', 'Performance', 'Technical Debt', 'EdTech'],
    projectLink: 'https://tec.mx/',
  },

  // --- TIER 3: Consumer Brands & High Visual Impact ---
  {
    imgSrc: '/images/projects/Ting.png',
    title: 'Ting',
    tags: ['Vue.js', 'Interactive UI', 'Azure', 'Motion'],
    projectLink: 'https://ting.com.mx/',
  },
  {
    imgSrc: '/images/projects/Irix.png',
    title: 'Irix Gotas',
    tags: ['Cloudflare', 'Vue.js', 'Azure', 'SEO'],
    projectLink: 'https://irixgotas.com.ar/',
  },
  {
    imgSrc: '/images/projects/microdacyn.png',
    title: 'Microdacyn',
    tags: ['Cloudflare', 'Vue.js', 'Azure', 'SEO'],
    projectLink: 'https://microdacyn.com.ar/',
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My Portfolio Highlights</h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink, status }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              status={status}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
