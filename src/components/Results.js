import React, { useState } from "react";

export function Results({ farenTemp }) {
  return (
    <div>
      <span>Fahrenheit:{farenTemp}</span>
      <br />
      {/* <span>celciusTemp:{celciusTemp}</span> */}
    </div>
  );
}
