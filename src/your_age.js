import React, { useState } from "react";

export function YourAge() {
  let ages = ["0 - 12", "13 - 17", "18 - 25", "older then 25"];

  let [value, setValue] = useState(ages[0]);

  let optionsAges = ages.map((elem, index) => {
    return (
      <option key={index} value={index}>
        {elem}
      </option>
    );
  });

  return (
    <div>
      <p>Choose your age</p>
      <select
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      >
        {optionsAges}
      </select>

      <p>Your age: {optionsAges[value]} </p>
    </div>
  );
}
