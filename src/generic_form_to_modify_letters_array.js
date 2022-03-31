import React, { useState } from "react";

export function GenericFormToModifyLettersArray() {
  const [array, setArray] = useState(["a", "b", "c", "d", "e"]);
  // const [editIndex, setEditIndex] =  useState(null)
  const [value, setValue] = useState("");

  let result = array.map((elem, index) => {
    return <li key={index}>{elem}</li>;
  });

  function changeValue(event) {
    setValue(event.target.value);
  }

  function addItem() {
    setArray([...array, value]);
  }

  let input;
  input = <input value={value} onChange={changeValue} onBlur={addItem} />;

  return (
    <div>
      <ul>{result}</ul>
      {input}
    </div>
  );
}
