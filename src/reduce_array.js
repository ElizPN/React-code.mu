import React, { useState } from "react";

export function ReduceArray() {
  let [array, setArray] = useState([5, 4, 3, 2, 1]);

  const copy = Object.assign([], array);
  let index = 0;
  copy.splice(index, 1);

  return (
    <div>
      {array}
      <button
        onClick={() => {
          setArray(copy);
        }}
      >
        Delete element from array
      </button>
    </div>
  );
}
