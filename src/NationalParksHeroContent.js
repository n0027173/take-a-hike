import React from "react";
import "./HeroContent.css";

const MountainDetailsHeroContent = ({
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
        <div id="mtnsDDLDiv">
          <label htmlFor="mtnsDDL" id="mtnsDDLLabel" className="m-3">
            Select a mountain:
          </label>
          <select id="mtnsDDL" onChange={onChange}>
            <option disabled="">-- Select One --</option>
            {mountains.map((mountain, index) => (
              <option value={mountain.name} key={index}>
                {mountain.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </section>
  );
};

export default MountainDetailsHeroContent;
