import React, { useState } from "react";

export function CheckBox() {
  let [checked, setChecked] = useState(true);
  let [value, setValue] = useState("default");

  return (
    <div>
      <label htmlFor="elem">text</label>
      <input
        id="elem"
        type="checkbox"
        checked={checked}
        onChange={() => {
          setChecked(!checked);
        }}
      />
      <button onClick={() => setValue(checked ? "Hello man" : "Good bay man")}>
        BTN
      </button>
      <p>{value}</p>
    </div>
  );
}
