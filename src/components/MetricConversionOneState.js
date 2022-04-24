import React, { useState } from "react";
import { TempInput4 } from "./TempInput4";

export function MetricConversionOneState() {
  const initialFarTemp = 0;
  const [allTemps, setAllTemps] = useState({
    farTemp: initialFarTemp,
    celsTemp: farToCelsius(initialFarTemp),
  });
  console.log(allTemps);

  function farToCelsius(num) {
    let result = (num - 32) * (5 / 9);
    return result;
  }

  function celsiusToFar(num) {
    let result = num * (9 / 5) + 32;
    return result;
  }

  function editFarTemp(event) {
    setAllTemps({
      farTemp: event.target.value,
      celsTemp: farToCelsius(event.target.value),
    });
  }

  function editCelTemp(event) {
    setAllTemps({
      farTemp: celsiusToFar(event.target.value),
      celsTemp: event.target.value,
    });
  }

  return (
    <TempInput4
      allTemps={allTemps}
      editFarTemp={editFarTemp}
      editCelTemp={editCelTemp}
    />
  );
}
