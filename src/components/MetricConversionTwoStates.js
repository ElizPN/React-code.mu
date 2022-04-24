import React, { useState } from "react";
import { TempInput3 } from "./TempInput3";

export function MetricConversionTwoStates() {
  const [farTemp, setFarTemp] = useState(0);
  const [celsTemp, setCelsTemp] = useState(0);

  function farToCelsius(num) {
    let result = (num - 32) * (5 / 9);
    return result;
  }

  function celsiusToFar(num) {
    let result = num * (9 / 5) + 32;
    return result;
  }

  function editFarTemp(event) {
    setFarTemp(event.target.value);
    setCelsTemp(farToCelsius(event.target.value));
  }

  function editCelTemp(event) {
    setCelsTemp(event.target.value);
    setFarTemp(celsiusToFar(event.target.value));
  }

  return (
    <TempInput3
      farTemp={farTemp}
      celsTemp={celsTemp}
      farToCelsius={farToCelsius}
      celsiusToFar={celsiusToFar}
      editFarTemp={editFarTemp}
      editCelTemp={editCelTemp}
      setCelsTemp={setCelsTemp}
    />
  );
}
