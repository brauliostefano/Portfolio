/**
 * @copyright 2024 Braulio Stefano
 * @license Apache-2.0
 */

/**
 * Compoonents
 */

import { ButtonOutline } from './Button';

import CV from '../components/CV.pdf';

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

          {/* TÍTULO PRINCIPAL: Directo y Senior */}
          <h2 className="headline-1 max-w-[20ch] sm:max-w-[25ch] lg:max-w-[30ch] mt-5 mb-4 text-zinc-50">
            Full Stack Engineer
          </h2>

          {/* SUBTÍTULO: Tu propuesta de valor "Pitch" */}
          <p className="text-zinc-400 text-lg leading-relaxed mb-8 lg:mb-10 max-w-[50ch]">
            Specialized in building scalable ecosystems, high-performance UIs,
            and decentralized applications for global brands like{' '}
            <strong className="text-zinc-200 font-medium">
              <a
                href="https://sanfer.com.mx/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-emerald-400 cursor-pointer"
              >
                Sanfer
              </a>
            </strong>
            ,
            <strong className="text-zinc-200 font-medium ml-1">
              <a
                href="https://app.lid.pro/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-emerald-400 cursor-pointer"
              >
                Lid
              </a>
            </strong>
            , and
            <strong className="text-zinc-200 font-medium ml-1">
              <a
                href="https://martingarrix.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-emerald-400 cursor-pointer"
              >
                Martin Garrix
              </a>
            </strong>
            .
          </p>

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
