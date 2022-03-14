import React, { useState } from "react";

function countAvarage(num1, num2, num3, num4, num5) {
  let result = (num1 + num2 + num3 + num4 + num5) / 5;
  console.log(result);
  return result;
}

export function Avarage() {
  let [value1, setValue1] = useState(0);
  let [value2, setValue2] = useState(0);
  let [value3, setValue3] = useState(0);
  let [value4, setValue4] = useState(0);
  let [value5, setValue5] = useState(0);

  return (
    <div>
      <input
        value={value1}
        onChange={(event) => {
          setValue1(+event.target.value);
        }}
      />
      <input
        value={value2}
        onChange={(event) => {
          setValue2(+event.target.value);
        }}
      />
      <input
        value={value3}
        onChange={(event) => {
          setValue3(+event.target.value);
        }}
      />
      <input
        value={value4}
        onChange={(event) => {
          setValue4(+event.target.value);
        }}
      />
      <input
        value={value5}
        onChange={(event) => {
          setValue5(+event.target.value);
        }}
      />
      <p>{countAvarage(value1, value2, value3, value4, value5)}</p>
    </div>
  );
}
