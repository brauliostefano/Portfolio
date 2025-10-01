/**
 * @copyright 2024 Braulio Stefano
 * @license Apache-2.0
 */
import ProjectCard from './ProjectCard';

const works = [
  {
    imgSrc: '/images/LidApp1.png',
    title: 'Lid App',
    tags: ['React js', 'Web3.js', 'NextJS', 'Base', 'Privy', 'TailwindCSS'],
    projectLink: 'https://alpha.lid.pro/',
  },
  {
    imgSrc: '/images/LidSite1.png',
    title: 'Lid Site',
    tags: ['Web Design', 'React.js', 'NextJS', 'TailwindCSS', 'Vercel'],
    projectLink: 'https://lid.pro/',
  },
  {
    imgSrc: '/images/LidBlog1.png',
    title: 'Lid Blog',
    tags: ['Web Design', 'React.js', 'NextJS', 'TailwindCSS', 'Vercel'],
    projectLink: 'https://blog.lid.pro/',
  },
  {
    imgSrc: '/images/STMPDRCRDS.png',
    title: 'STMPD Studios',
    tags: ['React.js', 'Headless CMS', 'AWS'],
    projectLink: 'https://www.stmpdstudios.com/',
  },
  {
    imgSrc: '/images/LogoSanfer.png',
    title: 'Sanfer Labs',
    tags: ['React.js', 'CSS', 'Azure', 'JavaScript'],
    projectLink: 'https://sanfer.com.mx/',
  },
  {
    imgSrc: '/images/Irix.png',
    title: 'Irix Gotas',
    tags: ['Web Design', 'React.js', 'vue.js', 'Azure', 'CSS'],
    projectLink: 'https://irixgotas.com.ar/',
  },
  {
    imgSrc: '/images/Ting1.png',
    title: 'Ting',
    tags: ['vue.js', 'animate.js', 'Azure', 'CSS'],
    projectLink: 'https://ting.com.mx/',
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My Portfolio hightlights</h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
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
