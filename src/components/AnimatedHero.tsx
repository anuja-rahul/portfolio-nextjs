import clsx from "clsx";
import "./index.scss";
import PropTypes from "prop-types";

interface AnimatedHeroProps {
  letterClass: string;
  strArray: string[];
  idx: number;
}

const AnimatedHero = ({ letterClass, strArray, idx }: AnimatedHeroProps) => {
  return (
    <span className="animated-container text-4xl sm:text-5xl lg:text-6xl">
      {strArray.map((char, i) => (
        <span
          key={char + i}
          className={clsx(`${letterClass} _${i + idx}`, "each-char")}
        >
          {char}
        </span>
      ))}
    </span>
  );
};

AnimatedHero.propTypes = {
  letterClass: PropTypes.string.isRequired,
  strArray: PropTypes.arrayOf(PropTypes.string).isRequired,
  idx: PropTypes.number.isRequired,
};

export default AnimatedHero;
