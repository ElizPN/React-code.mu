import React, { useState } from "react";

export function DeleteElementByIndex() {
  let [array, setArray] = useState([1, 2, 3, 4, 5, 6]);

  let newArray = array.map((elem, index) => (
    <p key={index} onClick={() => deleteElement(index)}>
      {elem}
    </p>
  ));

  function deleteElement(index) {
    let araryBeforeIndex = array.slice(0, index);
    let arrayAfterIndex = array.slice(index + 1);

    return setArray([...araryBeforeIndex, ...arrayAfterIndex]);
  }

  return <div>{newArray}</div>;
}
