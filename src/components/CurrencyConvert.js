import React, { useState } from "react";
import { CurrencyInput } from "./CurrencyInput";
import { CurrencyResult } from "./CurrencyResult";

export function CurrencyConvert() {
  const [euro, setEuro] = useState(0);
  const [krona, setKrona] = useState(0);

  function enterEuroCurrency(event) {
    setEuro(event.target.value);
  }

  return (
    <div>
      <CurrencyInput euro={euro} enterEuroCurrency={enterEuroCurrency} />
      <CurrencyResult krona={krona} />
    </div>
  );
}
