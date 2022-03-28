import React, { useState } from "react";

export function DeleteElementByIndex() {
  let [array, setArray] = useState([1, 2, 3, 4, 5, 6]);

  return <div>{array}</div>;
}
