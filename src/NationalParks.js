import React, { useState, useEffect } from 'react';

function NationalParks() {
  const [data,setData]=useState([]);
    function getData(){
        fetch("./nationalparks.json")
        .then(response => {
        // console.log(response)
          return response.json()
        })
        .then(response => {
          setData(response)
          // console.log(response)
        })
      }
        useEffect(()=>{
          getData()
      },[]);
  return (
    <div>
      <table class="table table-striped" >
<thead>
  <tr>
    <th scope="col">Location Name</th>
    <th scope="col">Address</th>
    <th scope="col">City</th>
    <th scope="col">State</th>
    <th scope="col">Zip</th>
  </tr>
</thead>
<tbody>
    {data.parks && data.parks.map(park => (
  <tr key={park.LocationID}>
    <th scope="row">{park.LocationName}</th>
    <td>{park.Address}</td>
    <td>{park.City}</td>
    <td>{park.State}</td>
    <td>{park.ZipCode}</td>
  </tr>
 ))}
</tbody>
</table>
       
    </div>

  )
}
 
export default NationalParks;