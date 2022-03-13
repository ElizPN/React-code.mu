import React, { useState } from "react";

export function Input() {
  let [value0, setValue] = useState("");

  return (
    <div>
      <input
        value={value0}
        onChange={(event) => {
          setValue(event.target.value);
          console.log(event.target.value);
        }}
      />{" "}
      {console.log({ value0 })}
    </div>
  );
}
