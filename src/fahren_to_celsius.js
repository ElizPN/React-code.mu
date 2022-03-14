import React, { useState } from "react";

function fahrenToCelsius(num) {
  let result = ((num - 32) * 5) / 9;
  return result;
}

export function CountTemperature() {
  let [value, setValue] = useState(0);

  return (
    <div>
      {" degrees Fahrenheit: "}

      <input value={value} onChange={(event) => setValue(event.target.value)} />
      <p> degrees Celsius: {fahrenToCelsius(value)}</p>
    </div>
  );
}
