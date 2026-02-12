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
      'Managing this project meant dealing with some very outdated infrastructure that was holding the client back. Stefano took charge of the entire migration and moved everything to a modern setup that is fast and stable. He implemented the new content system and translation features perfectly and the client was extremely happy with the upgrade.',
    name: 'Eva Mireles',
    imgSrc: '/images/reviews/agaveazul2.svg',
    company: 'Marketing Lead',
  },
  {
    content:
      'Leading the innovation team at Sanfer meant we had to modernize everything while keeping over ten applications running perfectly. Stefano was fundamental in helping us make that happen. He understood that we needed speed and stability and he delivered code that made our entire ecosystem faster. It is rare to find an engineer who understands the architecture as well as the details and Braulio has that balance perfectly.',
    name: 'Fernando Gamallo',
    imgSrc: '/images/reviews/sanfer2.svg',
    company: 'IT Director',
  },
  {
    content:
      "Navigating the technical depths of Web3 is a journey I'm still on, so having Braulio translate raw code into a seamless user experience was invaluable. He brought stability where we needed it most. His structured approach didn't just fix bugs; it gave the whole team the peace of mind to keep pushing forward.",
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
