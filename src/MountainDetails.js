function MountainDetails({ mountains }) {
  return (
    <div>
      {mountains.map((mountain) => (
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
      ))}
    </div>
  );
}

export default MountainDetails;
