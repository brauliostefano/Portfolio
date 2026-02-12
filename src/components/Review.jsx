import { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import ReviewCard from './ReviewCard';

const ArrowLeft = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 -960 960 960"
    width="24"
    fill="currentColor"
  >
    <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
  </svg>
);

const ArrowRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 -960 960 960"
    width="24"
    fill="currentColor"
  >
    <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
  </svg>
);

const reviews = [
  {
    content:
      'Braulio didn’t just build us a website, he completely reshaped how we operate online. The move to a headless CMS and the multi-language setup made expanding into the US market feel seamless. We saw noticeable improvements in performance and user engagement almost immediately.',
    name: 'Eva Mireles',
    imgSrc: '/images/reviews/agaveazul2.svg',
    company: 'Marketing Lead',
  },
  {
    content:
      'What really stands out about Braulio is his ability to think big while still caring about the smallest technical details. He helped us modernize and optimize critical internal systems, turning complex enterprise requirements into solutions that actually make our day-to-day work easier.',
    name: 'Fernando Gamallo',
    imgSrc: '/images/reviews/sanfer2.svg',
    company: 'IT Director',
  },
  {
    content:
      'In Web3, it’s hard to find someone who truly understands both smart contract integrations and user experience. Braulio does. He brought stability and clarity to our platform, and his engineering discipline gave the entire team confidence in every release.',
    name: 'Lid Protocol Team',
    imgSrc: '/images/reviews/lid2.svg',
    company: 'DeFi Platform',
  },
  {
    content:
      "When Martjin and the whole team launch a project, the response from fans is immediate and overwhelming. Normally, such volume would overwhelm an entire team, but Stefano and the team made sure that everything was under control. I don't know what technical magic he used, or how they managed to keep the site from crashing, I just know that everything went perfectly while fans browsed calmly. This man is completely unflappable.",
    name: 'Confidential Project',
    imgSrc: '/images/reviews/martingarrix.svg',
    company: 'STMPD RCRDS',
  },
];

const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  useGSAP(() => {
    const cardWidth = 420;

    gsap.to(containerRef.current, {
      x: -(currentIndex * cardWidth),
      duration: 0.5,
      ease: 'power2.out',
    });
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  return (
    <section id="reviews" className="section overflow-hidden">
      |{' '}
      <div className="container mb-8">
        <div className="flex items-center justify-between">
          <h2 className="headline-2 reveal-up">What people say</h2>
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className="p-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 transition-colors active:scale-95 border border-zinc-700/50"
            >
              <ArrowLeft />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 transition-colors active:scale-95 border border-zinc-700/50"
            >
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
      {/* 2. CARRUSEL FULL WIDTH (Fuera del container) */}
      <div className="w-full overflow-hidden pl-4 md:pl-8">
        <div
          ref={containerRef}
          className="flex gap-10 w-fit will-change-transform"
        >
          {reviews.map(({ content, name, imgSrc, company }, key) => (
            <div key={key} className="w-[320px] md:w-[400px] shrink-0">
              <ReviewCard
                name={name}
                imgSrc={imgSrc}
                company={company}
                content={content}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
