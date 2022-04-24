import React, { useState } from "react";

export function TempInput4({ allTemps, editFarTemp, editCelTemp }) {
  return (
    <div>
      <span>Fahrenheit</span>
      <input value={allTemps.farTemp} onChange={editFarTemp} />
      <span>Celsius</span>
      <input value={allTemps.celsTemp} onChange={editCelTemp} />
    </div>
  );
}
