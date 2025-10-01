/**
 * @copyright 2024 Braulio Stefano
 * @license Apache-2.0
 */

/**
 * Compoonents
 */

import ProjectCard from './ProjectCard';

const works = [
  {
    imgSrc: '/images/projectGradient1.jpg',
    title: 'Lid App',
    tags: ['React js', 'Web3.js', 'IPFS', 'MetaMask'],
    projectLink: 'https://app.eno.network/',
  },
  {
    imgSrc: '/images/projectGradient2.jpg',
    title: 'STMPD Studios',
    tags: ['React.js', 'Headless CMS', 'AWS'],
    projectLink: 'https://www.stmpdstudios.com/',
  },
  {
    imgSrc: '/images/projectGradient3.jpg',
    title: 'ENO Network',
    tags: ['Web-design', 'React.js'],
    projectLink: 'https://eno.network/',
  },
  {
    imgSrc: '/images/projectGradient4.jpg',
    title: 'Ting',
    tags: ['vue.js', 'animate.js', 'Azure'],
    projectLink: 'https://ting.com.mx/',
  },
  {
    imgSrc: '/images/projectGradient5.jpg',
    title: 'Irix Gotas',
    tags: ['Web-design', 'React.js', 'vue.js'],
    projectLink: 'https://irixgotas.com.ar/',
  },
  {
    imgSrc: '/images/projectGradient6.jpg',
    title: 'Blog Eno',
    tags: ['Web-design', 'React.js'],
    projectLink: 'https://blog.eno.network/',
  },
];

import React from 'react';

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
