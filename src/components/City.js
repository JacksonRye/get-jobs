import React, { useState } from "react";

const City = ({ city }) => {
  let { name } = city;

  let [isChecked, setIsChecked] = useState(false);

  return (
    <div className="City">
      <input
        id={name}
        name={name}
        onChange={() => setIsChecked(!isChecked)}
        checked={isChecked}
        type="checkbox"
      />
      <label htmlFor={name}>{name}</label>
    </div>
  );
};

export default City;
