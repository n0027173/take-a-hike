import React, { useState, useEffect } from "react";
import NationalParksHeroContent from "./NationalParksHeroContent";
import NationalParksDetails from "./NationalParksDetails";

function NationalParksPage() {
  const [nationalParkData, setNationalParkData] = useState([]);

  const [parkTypeOptionsList, setParkTypeOptionsList] = useState([]);

  const [nationalParkFilterOption, setNationalParkFilterOption] = useState("");

  function getNationalParkData() {
    fetch("./nationalparks.json")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setNationalParkData(response.parks);
      });
  }
  useEffect(() => {
    getNationalParkData();
  }, []);

  function getParkTypesData() {
    fetch("./parktypes.json")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setParkTypeOptionsList(response);
      });
  }

  useEffect(() => {
    getParkTypesData();
  }, []);

  // console.log(nationalParkData);

  return (
    <div>
      {nationalParkData && nationalParkData[0] ? (
        <NationalParksHeroContent
          nationalParkFilterOption={nationalParkFilterOption}
          setNationalParkFilterOption={setNationalParkFilterOption}
          parkTypeOptionsList={parkTypeOptionsList}
          nationalParkData={nationalParkData}
        />
      ) : (
        ""
      )}

      <NationalParksDetails nationalParkData={nationalParkData} />
    </div>
  );
}

export default NationalParksPage;
