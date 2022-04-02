import React, { useState } from "react";

function getAverage(arr) {
  let sum = 0;
  let avarage;
  for (let elem of arr) {
    sum += elem;
  }

  avarage = sum / arr.length;
  return avarage;
}

export function BindingInputsToArray() {
  let [array, setArray] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  let renderToInput = array.map((elem, index) => {
    return (
      <input
        key={index}
        value={elem}
        onChange={(event) => onChangeInput(index, event)}
      />
    );
  });

  function onChangeInput(index, event) {
    let araryBeforeIndex = array.slice(0, index);
    let arrayAfterIndex = array.slice(index + 1);
    return setArray([
      ...araryBeforeIndex,
      parseInt(event.target.value) || 0, // or we can use Number(event.target.value) || 0
      ...arrayAfterIndex,
    ]);
  }

  return (
    <div>
      {getAverage(array)}
      {renderToInput}
    </div>
  );
}
