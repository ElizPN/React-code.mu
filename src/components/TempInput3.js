import React, { useState } from "react";

export function TempInput3({
  farTemp,
  celsTemp,
  farToCelsius,
  celsiusToFar,
  editFarTemp,
  editCelTemp,
}) {
  return (
    <div>
      <span>farenhate</span>
      <input value={farTemp} onChange={editFarTemp} />
      <span>celsius</span>
      <input value={celsTemp} onChange={editCelTemp} />
    </div>
  );
}
