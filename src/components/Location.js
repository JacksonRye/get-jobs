import React from "react";
import City from "./City";

const Location = () => {
  const cities = [
    {
      id: 1,
      name: "London",
    },
    {
      id: 2,
      name: "Amsterdam",
    },
    {
      id: 3,
      name: "New York",
    },
    {
      id: 4,
      name: "Berlin",
    },
  ];
  return (
    <div className="Location">
      <h3>Location</h3>
      <form>
        <input placeholder="  City, state, zip code or country" type="text" />
      </form>
      <div className="box">
        {cities.map((city) => (
          <City key={city.id} city={city} />
        ))}
      </div>
    </div>
  );
};

export default Location;
