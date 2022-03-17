import React, { useState } from "react";

function countDifference(num1, num2) {
  const date1 = new Date(num1);
  const date2 = new Date(num2);
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;
}

// function convertDate(date) {
//   return new Date(date);
// }

export function CreateDate() {
  const current = new Date().toDateString();
  console.log(typeof current);

  let [value1, setValue1] = useState(current);
  let [value2, setValue2] = useState(current);
  let [result, setResult] = useState(0);
  console.log(value1);

  return (
    <div>
      <input
        type="date"
        value={value1}
        onChange={(event) => {
          setValue1(event.target.value);
        }}
      />
      <input
        type="date"
        value={value2}
        onChange={(event) => {
          setValue2(event.target.value);
        }}
      />
      <button onClick={() => setResult(countDifference(value1, value2))}>
        Calculate difference
      </button>
      <p>{result}</p>
    </div>
  );
}
