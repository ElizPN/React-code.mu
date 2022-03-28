import React, { useState } from "react";

export function DeleteElementByIndex() {
  let [array, setArray] = useState([1, 2, 3, 4, 5, 6]);

  let newArray = array.map((elem, index) => <p key={index}>{elem}</p>);

  return <div>{newArray}</div>;
}
