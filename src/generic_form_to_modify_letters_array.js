import React, { useState } from "react";

export function GenericFormToModifyLettersArray() {
  const [array, setArray] = useState(["a", "b", "c", "d", "e"]);
  const [editIndex, setEditIndex] = useState(null);
  const [value, setValue] = useState("");

  let result = array.map((elem, index) => {
    return (
      <li key={index} onClick={() => setEditIndex(index)}>
        {elem}
      </li>
    );
  });

  function changeValue(event) {
    setValue(event.target.value);
  }

  function addItem() {
    setArray([...array, value]);
  }

  function changeItem(event) {
    let arrayBeforeIndex = array.slice(0, editIndex);
    let arrayAfterIndex = array.slice(editIndex + 1);
    return setArray([
      ...arrayBeforeIndex,
      event.target.value,
      ...arrayAfterIndex,
    ]);
  }

  let input;
  if (editIndex) {
    input = <input value={array[editIndex]} onChange={changeItem} />;
  } else {
    input = <input value={value} onChange={changeValue} onBlur={addItem} />;
  }

  return (
    <div>
      <ul>{result}</ul>
      {input}
    </div>
  );
}
