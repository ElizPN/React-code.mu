import React, { useState } from "react";

function length(elem) {
  return elem.length;
}

function square(num) {
  return num ** 2;
}

export function CountSymbols() {
  let [value, setValue] = useState("");

  return (
    <div>
      <input
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
      <p>{length(value)}</p>
      <p>{square(value)}</p>
    </div>
  );
}
