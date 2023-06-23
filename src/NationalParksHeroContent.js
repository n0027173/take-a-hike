import React, { useEffect } from "react";
import "./HeroContent.css";

const NationalParksHeroContent = ({
  nationalParkFilterOption,
  setNationalParkFilterOption,
  nationalParkData,
  parkTypeOptionsList,
}) => {
  const handleFilterChange = (ev) => {
    const filterValue = ev.target.value;
    setNationalParkFilterOption(filterValue);
    // console.log(filterValue);
    RenderSecondInput(filterValue, nationalParkData);
  };

  function onChange() {
    console.log("You hit onChange");
  }

  console.log(nationalParkData);

  function RenderSecondInput(filterValue, nationalParkData) {
    switch (filterValue) {
      case "Location":
        // console.log("Location hit Here!");
        // console.log(nationalParkData);
        return (
          // <div>"Returning Location Here!"</div>
          <div id="mtnsDDLDiv">
            <label htmlFor="mtnsDDL" id="mtnsDDLLabel" className="m-3">
              Select a Location:
            </label>
            <select id="mtnsDDL" onChange={onChange}>
              <option disabled="">-- Select A Location --</option>
              {nationalParkData.map((park, index) => (
                <option value={park.State} key={index}>
                  {park.name}
                </option>
              ))}
            </select>
          </div>
        );

      case "Park Type":
        // console.log("Park Type hit Here!");
        return "You hit Park Type!";
      default:
        return <div>Hmm, you hit default!</div>;
    }
  }

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Explore National Parks</h1>
        <h2 className="hero-subtitle">
          We offer the best adventure holidays and tailor-made trips!
        </h2>
        <div id="mtnsDDLDiv">
          <label htmlFor="mtnsDDL" id="mtnsDDLLabel" className="m-3">
            Select a Filter Type:
          </label>
          <select id="mtnsDDL" onChange={handleFilterChange}>
            <option disabled="">-- Select One --</option>
            <option value="Location">By Location:</option>
            <option value="Park Type">By Park Type:</option>
          </select>
        </div>
        {RenderSecondInput(nationalParkFilterOption, nationalParkData)}
      </div>
    </section>
  );
};

export default NationalParksHeroContent;
