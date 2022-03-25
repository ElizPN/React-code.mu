import React, { useState } from "react";

export function SortArray() {
  let [array, setArray] = useState([8, 7, 6, 5, 4, 3, 2, 1]);
  let copy = Object.assign([], array);
  copy.sort();

  return (
    <div>
      {array}
      <button
        onClick={() => {
          setArray(copy);
        }}
      >
        Flip array
      </button>
    </div>
  );
}
