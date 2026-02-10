/**
 * @copyright 2024 Braulio Stefano
 * @license Apache-2.0
 */

import PropTypes from 'prop-types';

// Definimos los items de las estrellas (5 estrellas)
const ratings = new Array(5).fill({
  icon: 'star',
  style: { fontVariationSettings: '"FILL" 1' },
});

const ReviewCard = ({ content, imgSrc, name, company }) => {
  return (
    <div className="bg-zinc-800 p-5 rounded-xl min-w-[320px] flex flex-col lg:min-w-[420px] border border-zinc-700/50 hover:bg-zinc-700/40 transition-colors">
      {/* Estrellas */}
      <div className="flex items-center gap-1 mb-3">
        {ratings.map(({ icon, style }, key) => (
          <span
            key={key}
            className="material-symbols-rounded text-yellow-300 text-[18px]"
            style={style}
          >
            {icon}
          </span>
        ))}
      </div>

      <p className="text-zinc-400 mb-8 leading-relaxed">{content}</p>

      <div className="flex items-center jus gap-3 mt-auto">
        <figure className="img-box rounded-lg w-11 h-11 bg-zinc-700 overflow-hidden shrink-0">
          <img
            src={imgSrc}
            alt={name}
            width={44}
            height={44}
            loading="lazy"
            className="img-cover w-full h-full object-cover"
          />
        </figure>

        <div>
          <p className="text-zinc-200 font-medium">{name}</p>
          <p className="text-xs text-zinc-400 tracking-wider uppercase font-semibold">
            {company}
          </p>
        </div>
      </div>
    </div>
  );
};

// CORREGIDO: propTypes con 'p' minúscula
ReviewCard.propTypes = {
  content: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
};

export default ReviewCard;
