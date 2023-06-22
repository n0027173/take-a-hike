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
      <NationalParksDetailsHeroContent />
    </div>
  );
}

export default MountainPage;
