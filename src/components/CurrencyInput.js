import React, { useState } from "react";

export function CurrencyInput({
  euro,
  enterEuroCurrency,
  euroToKrona,
  setKrona,
}) {
  return (
    <div>
      <input
        value={euro}
        onChange={(event) => enterEuroCurrency(event)}
      ></input>
      <button onClick={() => setKrona(euroToKrona(euro))}>Convert</button>
    </div>
  );
}
