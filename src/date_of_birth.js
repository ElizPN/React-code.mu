import React, { useState } from "react";

function countYearOfBirth(num) {
  let date = new Date().getFullYear();
  return date - num;
}

export function YearOfBirth() {
  let [value, setValue] = useState(0);

  return (
    <div>
      {" Your age: "}
      <input value={value} onChange={(event) => setValue(event.target.value)} />
      <p>Year of your birth: {countYearOfBirth(value)}</p>
    </div>
  );
}
