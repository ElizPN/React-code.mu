import React, { useState } from "react";

const initDate = {
  year: 2025,
  month: 12,
  day: 31,
};

export function BindingInputsToObject2() {
  const [obj, setObj] = useState(initDate);

  function handleChangeProperty(prop, event) {
    const copy = Object.assign({}, obj);
    copy[prop] = event.target.value;
    setObj(copy);
  }

  return (
    <div>
      <p>{obj.year}</p>
      <p>{obj.month}</p>
      <p>{obj.day}</p>
      <br />

      <input
        value={obj.year}
        onChange={(event) => handleChangeProperty("year", event)}
      />
      <input
        value={obj.month}
        onChange={(event) => handleChangeProperty("month", event)}
      />
      <input
        value={obj.day}
        onChange={(event) => handleChangeProperty("day", event)}
      />
    </div>
  );
}
