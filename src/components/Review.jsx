import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import ReviewCard from './ReviewCard';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const reviews = [
  {
    content:
      "Braulio didn't just build a website; he architected our digital transformation. His implementation of a headless CMS and multi-language support was crucial for our expansion into the US market. The performance improvements directly impacted our user engagement.",
    name: 'Eva Mireles',
    imgSrc: '/images/people/eva.jpg',
    company: 'Marketing Lead at Destiladora Agave Azul',
  },
  {
    content:
      "Exceptional technical leadership. Braulio possesses a rare combination of architectural vision and hands-on engineering excellence. He was instrumental in optimizing Sanfer's internal ecosystems, translating complex enterprise requirements into scalable, secure solutions.",
    name: 'Fernando Gamallo',
    imgSrc: '/images/projects/LogoSanfer.png',
    company: 'IT Director at Sanfer Labs',
  },
  {
    content:
      'In the Web3 space, finding an engineer who understands both Smart Contract integration and high-end UX is rare. Braulio bridged the gap seamlessly. The stability of the Lid Protocol interface is largely due to his rigorous engineering standards.',
    name: 'Lid Protocol Core Team',
    imgSrc: '/images/reviews/lid.svg',
    company: 'DeFi Platform',
  },
  {
    content:
      'Working with top-tier global artists requires zero margin for error. Braulio delivered a high-performance platform that handles massive traffic spikes during tour announcements without a glitch. A true technical partner for high-stakes projects.',
    name: 'Confidential Project',
    imgSrc: '/images/reviews/martingarrix.png',
    company: 'Global Music Label (STMPD RCRDS)',
  },
];

const Review = () => {
  const scrollContainer = useRef(null);

  useGSAP(() => {
    gsap.to(scrollContainer.current, {
      scrollTrigger: {
        trigger: '#reviews',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
        invalidateOnRefresh: true,
      },
      x: () => {
        const width = scrollContainer.current.scrollWidth;
        const screen = window.innerWidth;
        const offsetLeft = scrollContainer.current.getBoundingClientRect().left;
        return -1 * (width - screen + offsetLeft + 20);
      },
      ease: 'none',
    });
  }, []);

  return (
    <section id="reviews" className="section overflow-hidden">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">What people say</h2>

        <div
          ref={scrollContainer}
          className="scrub-slide flex items-stretch gap-3 w-fit"
        >
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
