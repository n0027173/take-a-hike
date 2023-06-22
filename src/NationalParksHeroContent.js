import React from "react";
import "./HeroContent.css";

const NationalParksHeroContent = ({
  mountains,
  filteredMountainFunction,
}) => {
  const handleClick = () => {};

  const onChange = (ev) => {
    const val = ev.target.value;

    filteredMountainFunction(val);
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Explore National Parks</h1>
        <h2 className="hero-subtitle">
          We offer the best adventure holidays and tailor-made trips!
        </h2>

      </div>
    </section>
  );
};

export default NationalParksHeroContent;
