import React, { useState, useEffect } from "react";
import NationalParksHeroContent from "./NationalParksHeroContent";
import NationalParksDetails from "./NationalParksDetails";

function NationalParksPage() {
  const [nationalParkData, setNationalParkData] = useState([]);
  const [parkTypeOptionsList, setParkTypeOptionsList] = useState([]);
  const [nationalParkFilterOption, setNationalParkFilterOption] = useState("");

  const [filterParksByLocation, setFilterParksByLocation] = useState([
    nationalParkData,
  ]);

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

  function filteredParkLocationFunction(selectedDropdownLocation) {
    const filteredLocation = nationalParkData.filter((park) =>
      park.State.includes(selectedDropdownLocation)
    );
    setFilterParksByLocation(filteredLocation);
  }

  // console.log(nationalParkData);

  return (
    <div>
      {nationalParkData && nationalParkData[0] ? (
        <NationalParksHeroContent
          nationalParkFilterOption={nationalParkFilterOption}
          setNationalParkFilterOption={setNationalParkFilterOption}
          parkTypeOptionsList={parkTypeOptionsList}
          nationalParkData={nationalParkData}
          filteredParkLocationFunction={filteredParkLocationFunction}
        />
      ) : (
        ""
      )}

      <NationalParksDetails
        nationalParkData={nationalParkData}
        filterParksByLocation={filterParksByLocation}
      />
    </div>
  );
}

export default NationalParksPage;
