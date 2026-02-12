/**
 * @copyright 2024 Braulio Stefano
 * @license Apache-2.0
 */

const aboutItems = [
  {
    label: 'Global Projects',
    number: 22,
  },
  {
    label: 'Years of Experience',
    number: 6,
  },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[90ch] text-justify">
            Welcome! I&apos;m Braulio, a{' '}
            <span className="text-zinc-100 font-medium">
              Senior Full Stack Engineer
            </span>{' '}
            dedicated to building robust, scalable digital ecosystems.
            Specializing in the JavaScript Ecosystem (React, Next.js, Node.js) ,
            I engineer robust applications for global brands. My focus is on
            transforming complex requirements into high speed digital
            experiences, whether for massive enterprise platforms or modern Web3
            integrations.
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-bold md:text-4xl">
                    {number}
                  </span>
                  <span className="text-emerald-400 font-semibold md:text-3xl">
                    +
                  </span>
                </div>

                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}

            <img
              src="/images/favicon1.svg"
              alt="Logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
