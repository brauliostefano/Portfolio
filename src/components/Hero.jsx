/**
 * @copyright 2024 Braulio Stefano
 * @license Apache-2.0
 */

/**
 * Compoonents
 */

import { ButtonOutline } from './Button';

import CV from '../components/BraulioStefanoEnglishCV.pdf';

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div
        className="container items-center lg:grid 
            lg:grid-cols-2  lg:gap-10"
      >
        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src="/images/kittie.jpg"
                width={40}
                height={40}
                alt="Braulio Stefano"
                className="img-cover"
              />
            </figure>

            <div
              className="flex items-center gap-1.5
                        text-zinc-400 text-sm tracking-wide "
            >
              <span
                className="relative w-2 h-2 
                            rounded-full bg-emerald-400"
              >
                <span
                  className="absolute inset-0 
                            rounded-full bg-emerald-400 animate-ping"
                ></span>
              </span>
              Available for work
            </div>
          </div>
          <h2
            className="headline-1 max-w-[15ch] sm:max-w-
                    [20ch] lg:max-w-[25ch] mt-5 mb-8 lg:mb-10"
          >
            I&apos;m Braulio Stefano
            <span className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              My portfolio showcases my passion for web development. Each
              project has taught me valuable lessons, allowing me to offer
              innovative and efficient solutions, leading to both personal and
              professional growth.
            </span>
          </h2>

          <div className="flex items-center gap-3">
            <a
              href={CV}
              download="BraulioStefano.pdf"
              className="btn btn-primary flex items-center"
            >
              <span className="material-symbols-rounded">download</span>
              Download CV
            </a>

            <ButtonOutline
              href="#about"
              label="Scroll down"
              icon="arrow_downward"
            />
          </div>
        </div>

        <div className="hidden lg:block">
          <figure
            className="w-full max-w-[480px] ml-auto 
                    bg-gradient-to-t  from-sky-50 via-25% via-sky-400/
                    40 to-65% rounded-[40px] overflow-hidden"
          >
            <img
              src="/images/Portfolio.png"
              width={656}
              height={800}
              alt="Braulio Stefano"
              className="w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
