import React, { useState } from "react";

export function ArrayCities() {
  let arrayCities = ["Malmo", "Stockholm", "Orebro", "Gnesta"];

  let [value, setValue] = useState(arrayCities[0]);

  let options = arrayCities.map((elem, index) => {
    return <option key={index}>{elem}</option>;
  });

  return (
    <div>
      <select
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      >
        {options}
      </select>
      <p>Your city: {value}</p>
    </div>
  );
}
