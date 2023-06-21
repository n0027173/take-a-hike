import React, { useState } from "react";
import "./HeroContent.css";
import "./MountainDetails";

const MountainDetailsHeroContent = ({
  mountains,
  setMountains,
  setSelectedMountain,
}) => {
  const handleClick = () => {};
  const mountainSelections = [
    {
      label: "Mt. Jefferson",
      value: "Mt. Jefferson",
    },

    {
      label: "Mt. Washington",
      value: "Mt. Washington",
    },

    {
      label: "Mt. Everest",
      value: "Mt. Everest",
    },
  ];

  const onChange = (ev) => {
    const val = ev.target.value;
    setSelectedMountain(val);
    console.log(val);
  };
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Explore Mountains</h1>
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
