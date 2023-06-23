import "../styles/MountainPage.css";
import React, { useState, useEffect } from "react";
import MountainDetailsHeroContent from "./MountainDetailsHeroContent";

function MountainPage() {
  const [mountains, setMountains] = useState([]);
  const [filterMountains, setFilterMountains] = useState([]);

  function getData() {
    fetch("./mountains.json")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setMountains(response.mountains);
      });
  }
  useEffect(() => {
    getData();
  }, []);

  function filteredMountainFunction(selectedDropdownMountain) {
    const filteredMountain = mountains.filter((mountain) =>
      mountain.name.includes(selectedDropdownMountain)
    );
    setFilterMountains(filteredMountain);
  }

  return (
    <div id="container">
      <MountainDetailsHeroContent
        mountains={mountains}
        filteredMountainFunction={filteredMountainFunction}
      />
      <div className="support-grid"></div>
      <div className="band">
        {filterMountains.map((mountain) => (
          <div key={mountain.name} className="item-4">
            <div className="card">
              <article>
                <h1>{mountain.name}</h1>
                <div className="thumb">
                  <img
                    src={"./images/mountains/" + mountain.img}
                    alt={mountain.name}
                  />
                </div>
                <p>{mountain.desc}</p>
                <span>Elevation: {mountain.elevation}</span>
                <span>Effort: {mountain.effort}</span>
              </article>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MountainPage;
