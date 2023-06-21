import React, { useState } from 'react';
import "./HeroContent.css";
import "./MountainDetails";

const MountainDetailsHeroContent = (props) => {
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
    }

  ];

  const [option, setOption] = useState("");
  const [text, setText] = useState("");

  const onChange = (ev) => {
    const val = ev.target.value;
    props.setSelectedMountain(val);
    console.log(val)

    const mountain = mountainSelections[val];
    if (mountain) {
      setText(mountain.value);
    }
  };
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Explore Mountains</h1>
        <h2 className="hero-subtitle">
          We offer the best adventure holidays and tailor-made trips!
        </h2>
        <div id="mtnsDDLDiv">
            <label htmlFor="mtnsDDL" id="mtnsDDLLabel" className="m-3">Select a mountain:</label>
            <select id="mtnsDDL" value={option} onChange={onChange}>
              <option disabled="">-- Select One --</option>
                {mountainSelections.map((mountain, index) => (
                  <option value={mountain.value} key={index}>
                    {mountain.value}
                  </option>
                ))}
            </select>
          </div>
      </div>
    </section>
  );
};

export default MountainDetailsHeroContent;
