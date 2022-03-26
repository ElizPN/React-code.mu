import React, { useState } from "react";

export function OnBlur() {
  let [array, setArray] = useState(["a", "b", "c", "d", "e"]);
  let [value, setValue] = useState("");

  let copy = array.map((elem, index) => {
    return <li key={index}>{elem}</li>;
  });

  function addElement() {
    setArray([copy, value]);
  }

  return (
    <div>
      <input
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
      <ul>{copy}</ul>
    </div>
  );
}
