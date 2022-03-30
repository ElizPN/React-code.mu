import React, { useState } from "react";

export function GenericFormToModifyArray2() {
  const [array, setArray] = useState([5, 4, 3, 2, 1]);
  const [changeIndex, setChangeIndex] = useState(null);
  const [value, setValue] = useState("");

  const result = array.map((elem, index) => {
    return (
      <p key={index} onClick={startEdit(index)}>
        {elem}
      </p>
    );
  });
  function startEdit(index) {
    setChangeIndex(index);
    setValue(array[changeIndex]);
  }

  return <div>{result}</div>;
}
