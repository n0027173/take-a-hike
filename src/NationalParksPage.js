import React, { useState, useEffect } from "react";
import NationalParksHeroContent from "./NationalParksHeroContent";
import NationalParksDetails from "./NationalParksDetails";

function NationalParksPage() {
  const [nationalParkData, setNationalParkData] = useState([]);
  function getNationalParkData() {
    fetch("./nationalparks.json")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setNationalParkData(response);
      });
  }
  useEffect(() => {
    getNationalParkData();
  }, []);
  return (
    <div>
      <NationalParksHeroContent />
      <NationalParksDetails nationalParkData={nationalParkData} />
    </div>
  );
}

export default NationalParksPage;
