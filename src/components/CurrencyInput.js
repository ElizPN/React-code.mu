import React, { useState } from "react";

export function CurrencyInput({ euro, enterEuroCurrency }) {
  return (
    <input value={euro} onChange={(event) => enterEuroCurrency(event)}></input>
  );
}
