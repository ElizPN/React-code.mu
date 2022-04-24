import React, { useState } from "react";

export function TempInput3({ farTemp, celsTemp, editFarTemp, editCelTemp }) {
  return (
    <div>
      <span>Fahrenheit</span>
      <input value={farTemp} onChange={editFarTemp} />
      <span>celsius</span>
      <input value={celsTemp} onChange={editCelTemp} />
    </div>
  );
}
