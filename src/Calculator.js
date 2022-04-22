import React, { useState } from "react";
import { TempInput } from "./components/TempInput";
import { Verdict } from "./components/Verdict";

export function Calculator() {
  const [temp, setTemp] = useState(0);

  function changeTemp(event) {
    setTemp(event.target.value);
  }

  return (
    <div>
      <TempInput temp={temp} changeTemp={changeTemp} />
      <Verdict temp={temp} />
    </div>
  );
}
