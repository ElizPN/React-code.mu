import React, { useState } from "react";
import { Results } from "./Results";
import { TempInput2 } from "./TempInput2";

export function MetricConversion() {
  const [celciusTemp, setCelciusTemp] = useState(0);
  const [farenTemp, setFarenTemp] = useState(0);

  function celsiusToFaren(temp) {
    return (temp * 9) / 5 + 32;
  }

  function editTemp(event) {
    setCelciusTemp(event.target.value);
  }

  return (
    <div>
      <TempInput2
        celciusTemp={celciusTemp}
        celsiusToFaren={celsiusToFaren}
        editTemp={editTemp}
        setFarenTemp={setFarenTemp}
      />
      <Results celciusTemp={celciusTemp} farenTemp={farenTemp} />
    </div>
  );
}
