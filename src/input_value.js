import React, { useState } from "react";

export function Input() {
  const [value, setValue] = useState("");

  return (
    <div>
      <input
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
          console.log(event.target.value);
        }}
      />{" "}
      {console.log({ value })}
    </div>
  );
}
