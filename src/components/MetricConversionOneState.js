import React, { useState } from "react";

export function MetricConversionOneState() {
  const [temp, setTemp] = useState(0);

  function fahrenToCelsius(num) {
    let result = ((num - 32) * 5) / 9;
    return result;
  }

  function editTemp(event) {
    setCelciusTemp(event.target.value);
  }
}
