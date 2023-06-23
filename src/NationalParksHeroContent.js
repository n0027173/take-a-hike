import "./styles/HeroContent.css";

const NationalParksHeroContent = ({
  nationalParkFilterOption,
  setNationalParkFilterOption,
  nationalParkData,
  parkTypeOptionsList,
}) => {
  const handleFilterChange = (ev) => {
    const filterValue = ev.target.value;
    setNationalParkFilterOption(filterValue);
    RenderSecondInput(filterValue, nationalParkData);
  };

  function onChange() {
    "";
  }

  function RenderSecondInput(filterValue, nationalParkData) {
    switch (filterValue) {
      case "Location":
        return (
          <div id="mtnsDDLDiv">
            <label htmlFor="mtnsDDL" id="mtnsDDLLabel" className="m-3">
              Select a Location:
            </label>
            <select id="mtnsDDL" onChange={onChange}>
              <option disabled="">-- Select A Location --</option>
              {nationalParkData.map((park, index) => (
                <option value={park.State} key={index}>
                  {park.State}
                </option>
              ))}
            </select>
          </div>
        );

      case "Park Type":
        return (
          <div id="mtnsDDLDiv">
            <label htmlFor="mtnsDDL" id="mtnsDDLLabel" className="m-3">
              Select a Park Type:
            </label>
            <select id="mtnsDDL" onChange={onChange}>
              <option disabled="">-- Select A Park Type--</option>
              {parkTypeOptionsList.map((option, index) => (
                <option value={option} key={index}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        );
      default:
        return "";
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
