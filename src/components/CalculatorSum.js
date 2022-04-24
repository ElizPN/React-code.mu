import React, { useState } from "react";

function getSum(arr) {
  let res = 0;

  for (let elem of arr) {
    res += +elem;
  }

  return res;
}

export function CalculatorSum() {
  const [inputValue, setInputValue] = useState("");
  const [arrayNums, setArrrayNums] = useState([1, 2, 3]);
  console.log(arrayNums);

  function changeInput(event) {
    setInputValue(event.target.value);
  }

  function blurInput(event) {
    if (event.target.value !== "") {
      setArrrayNums([...arrayNums, parseInt(event.target.value)]);
    }
  }

  return (
    <div>
      <p>{getSum(arrayNums)}</p>
      <input value={inputValue} onChange={changeInput} onBlur={blurInput} />
    </div>
  );
}
