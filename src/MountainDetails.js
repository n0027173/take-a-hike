import React, { useState, useEffect } from "react";

import "./MountainDetails.css";

function MountainDetails() {
  const [data, setData] = useState([]);
  function getData() {
    fetch("./mountains.json")
      .then((response) => {
        // console.log(response)
        return response.json();
      })
      .then((response) => {
        setData(response);
        // console.log(response)
      });
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="heroWrapper"> HELLO </div>
      <div>
        {data.mountains &&
          data.mountains.map((mountain) => (
            <ul key={mountain.name} className="">
              <li>
                <div>
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
          ))}
      </div>
    </>
  );
}

export default MountainDetails;
