import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import ReviewCard from './ReviewCard';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const reviews = [
  {
    content:
      'Exceptional web development! Delivered a seamless, responsive site with clean code and great UX.',
    name: 'Sophia Ramirez',
    imgSrc: '/images/people-1.jpg',
    company: 'PixelForge',
  },
  {
    content:
      'Impressive work! Fast loading times, intuitive design, and flawless backend integration. Highly recommend.',
    name: 'Ethan Caldwell',
    imgSrc: '/images/people-2.jpg',
    company: 'NexaWave',
  },
  {
    content:
      'Outstanding developer! Built a robust site with perfect functionality. Efficient and detail-oriented.',
    name: 'Liam Bennett',
    imgSrc: '/images/people-3.jpg',
    company: 'CodeCraft',
  },
  {
    content:
      'Creative and skilled! Produced a modern, user-friendly site that exceeded expectations. Great communication.',
    name: 'Noah Williams',
    imgSrc: '/images/people-4.jpg',
    company: 'BrightWeb',
  },
];

const Review = () => {
  useGSAP(() => {
    // Configuración original del ScrollTrigger con GSAP
    gsap.to('.scrub-slide', {
      scrollTrigger: {
        trigger: '.scrub-slide',
        start: '-200% 80%',
        end: '400% 80%',
        scrub: true,
      },
      x: '-1000',
    });
  });

  useEffect(() => {
    let container = document.querySelector('.scrub-slide');

    // Captura el movimiento del mouse y ajusta el desplazamiento
    const handleMouseMove = (event) => {
      let mouseX = event.clientX;
      let width = window.innerWidth;

      // Mapear la posición del mouse a un valor entre -1000 y 0
      let targetX = gsap.utils.mapRange(0, width, -1000, 0, mouseX);

      // Anima hacia esa posición
      gsap.to(container, { x: targetX, duration: 0.5 });
    };

    // Agregar el listener de mousemove
    window.addEventListener('mousemove', handleMouseMove);

    // Limpiar el evento cuando se desmonta el componente
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="reviews" className="section overflow-hidden">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">What people say</h2>
        <div className="scrub-slide flex items-stretch gap-3 w-fit">
          {reviews.map(({ content, name, imgSrc, company }, key) => (
            <ReviewCard
              key={key}
              name={name}
              imgSrc={imgSrc}
              company={company}
              content={content}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
