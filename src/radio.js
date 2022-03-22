import React, { useState } from "react";

export function Radio() {
  let [value, setValue] = useState(1);

  function changeHendler(event) {
    setValue(event.target.value);
  }

  return (
    <div>
      <input
        type="radio"
        name="radio"
        value="1"
        checked={value === "1" ? true : false}
        onChange={changeHendler}
      />
      <input
        type="radio"
        name="radio"
        value="2"
        checked={value === "2" ? true : false}
        onChange={changeHendler}
      />
      <input
        type="radio"
        name="radio"
        value="3"
        checked={value === "3" ? true : false}
        onChange={changeHendler}
      />

      <div>{value}</div>
    </div>
  );
}
