import React, { useState } from "react";
import { CurrencyInput } from "./CurrencyInput";
import { CurrencyResult } from "./CurrencyResult";

export function CurrencyConvert() {
  const [euro, setEuro] = useState(0);
  const [krona, setKrona] = useState(0);

  function enterEuroCurrency(event) {
    setEuro(event.target.value);
  }

  function euroToKrona(currency) {
    return currency * 10.25;
  }

  return (
    <div>
      <CurrencyInput
        euro={euro}
        enterEuroCurrency={enterEuroCurrency}
        euroToKrona={euroToKrona}
        setKrona={setKrona}
      />
      <CurrencyResult krona={krona} />
    </div>
  );
}
