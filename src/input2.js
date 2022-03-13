import React, { useState } from "react";

export function Input2() {
  let [value1, setValue1] = useState("");
  let [value2, setValue2] = useState("");

  return (
    <div>
      <p>
        <input
          value={value1}
          onChange={(event) => {
            setValue1(event.target.value); // event.target.value - property of input Object/ or attribte of input Tag
          }}
        />
      </p>

      <p>
        <input
          value={value2}
          onChange={(event) => {
            setValue2(event.target.value);
          }}
        />
      </p>
    </div>
  );
}
