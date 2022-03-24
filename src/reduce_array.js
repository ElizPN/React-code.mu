import React, { useState } from "react";

export function ReduceArray() {
  let [array, setArray] = useState([5, 4, 3, 2, 1]);

  return <div>{array}</div>;
}
