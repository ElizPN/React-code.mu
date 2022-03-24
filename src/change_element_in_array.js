import React, { useState } from "react";

export function ChangeElement() {
  let [array, setArray] = useState([0, 2, 4, 6, 8]);

  const newArr = Object.assign([], array);
  let index = 0;
  newArr[index] = "Zero";

  return <div>{newArr}</div>;
}
