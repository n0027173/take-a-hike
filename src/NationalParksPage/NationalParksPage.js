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

  const [filterParksByType, setFilterParksByType] = useState([
    nationalParkData,
  ]);

  function getNationalParkData() {
    fetch("./nationalparks.json")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setNationalParkData(response.parks.sort());
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
        setParkTypeOptionsList(response.sort());
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

  function filteredParkTypeFunction(selectedDropdownType) {
    setFilterParksByLocation("");
    const filteredType = nationalParkData.filter((type) =>
      type.LocationName.includes(selectedDropdownType)
    );
    setFilterParksByType(filteredType);
  }

  return (
    <div>
      {nationalParkData && nationalParkData[0] ? (
        <NationalParksHeroContent
          nationalParkFilterOption={nationalParkFilterOption}
          setNationalParkFilterOption={setNationalParkFilterOption}
          parkTypeOptionsList={parkTypeOptionsList}
          nationalParkData={nationalParkData}
          filteredParkLocationFunction={filteredParkLocationFunction}
          filteredParkTypeFunction={filteredParkTypeFunction}
        />
      ) : (
        ""
      )}

      <NationalParksDetails
        filterParksByLocation={filterParksByLocation}
        filterParksByType={filterParksByType}
      />
    </div>
  );
}

export default NationalParksPage;
