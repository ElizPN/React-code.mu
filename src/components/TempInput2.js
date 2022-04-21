import React, { useState } from "react";

export function TempInput2({
  celciusTemp,
  celsiusToFaren,
  editTemp,
  setFarenTemp,
}) {
  return (
    <div>
      Celcius:
      <input onChange={(event) => editTemp(event)} />
      <button onClick={() => setFarenTemp(celsiusToFaren(celciusTemp))}>
        Convert
      </button>
    </div>
  );
}
