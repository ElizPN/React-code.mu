import React, { useState } from "react";

export function ReduceArray() {
  let [array, setArray] = useState([5, 4, 3, 2, 1]);

  const copy = Object.assign([], array);
  let index = 0;
  copy.splice(index, 2);

  return <div>{copy}</div>;
}
