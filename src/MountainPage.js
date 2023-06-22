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
    console.log(filterMountains);
  }

  return (
    <div>
      <MountainDetailsHeroContent
        mountains={mountains}
        filteredMountainFunction={filteredMountainFunction}
      />
      {filterMountains.map((mountain) => (
        <div key={mountain.name}>
          <h3>{mountain.name}</h3>
          <p>Elevation: {mountain.elevation}</p>
          <p>Effort: {mountain.effort}</p>
          {/* Add more mountain details here */}
        </div>
      ))}
      {/* {mountains.map((mountain) => (
        <ul key={mountain.name} className="">
          <li>
            <div className="">
              <h2>{mountain.name}</h2>
              <div className="">
                <img
                  src={"./images/mountains/" + mountain.img}
                  alt={mountain.name}
                />
                <p>{mountain.desc}</p>
              </div>
              <ul className="">
                <li>Elevation: {mountain.elevation}</li>
                <li>Effort: {mountain.effort}</li>
                <li>Latitude: {mountain.coords.lat}</li>
                <li>Longitude: {mountain.coords.lng}</li>
              </ul>
            </div>
          </li>
        </ul>
      ))} */}
    </div>
  );
}

export default MountainPage;
