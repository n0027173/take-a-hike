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

  // {
  //   nationalParkData.map((parkData) => (
  //     <tr key={parkData.LocationID}>
  //       <th scope="row">{parkData.LocationName}</th>
  //       <td>{parkData.Address}</td>
  //       <td>{parkData.City}</td>
  //       <td>{parkData.State}</td>
  //       <td>{parkData.ZipCode}</td>
  //     </tr>
  //   ));
  // }

  // <div id="mtnsDDLDiv">
  //   <label htmlFor="mtnsDDL" id="mtnsDDLLabel" className="m-3">
  //     Select a mountain:
  //   </label>
  //   <select id="mtnsDDL" onChange={onChange}>
  //     <option disabled="">-- Select One --</option>
  //     {mountains.map((mountain, index) => (
  //       <option value={mountain.name} key={index}>
  //         {mountain.name}
  //       </option>
  //     ))}
  //   </select>
  // </div>;

  function RenderSecondInput(filterValue, nationalParkData) {
    switch (filterValue) {
      case "Location":
        // console.log("Location hit Here!");
        // console.log(nationalParkData);
        return (
 
          // console.log("Location hit Here!");
          
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

      //   <select
      //     value={nationalParkFilterOption}
      //     onChange={setNationalParkFilterOption}
      //   >
      //     {nationalParkData.map((parkData) => (
      //       <option value={parkData.State} key={parkData.LocationID}>
      //         {parkData.State}
      //       </option>
      //     ))}
      //   </select>
      // );
      case "Park Type":
        // console.log("Park Type hit Here!");
        return "You hit Park Type!";
      // <select
      //   value={nationalParkFilterOption}
      //   onChange={setNationalParkFilterOption}
      // >
      //   {parkTypeOptionsList.map((type) => (
      //     <option value={type} key={type}>
      //       {type}
      //     </option>
      //   ))}
      // </select>
      default:
        return <div>Hmm, you hit default!</div>;
    }
  }

  useEffect(() => {
    RenderSecondInput();
  }, [nationalParkFilterOption]);

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
        {RenderSecondInput(nationalParkFilterOption)}
      </div>
    </section>
  );
};

export default NationalParksHeroContent;
