import React, { useState } from "react";
import { TempInput } from "./TempInput";
import { Verdict } from "./Verdict";

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
