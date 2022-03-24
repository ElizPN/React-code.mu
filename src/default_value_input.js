import React, { useState } from "react";

export function DefaultInput() {
  let [value, setValue] = useState("Text");

  return (
    <div>
      <input defaultValue={value} />
    </div>
  );
}
