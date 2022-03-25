import React, { useState } from "react";

export function AddValueToArray() {
  let [notes, setNotes] = useState([4, 3, 2, 5, 6, 4, 3]);
  let [value, setValue] = useState("");

  let copy = notes.map((elem, index) => {
    return <p key={index}>{elem}</p>;
  });

  function changeInput(event) {
    setValue(event.target.value);
  }

  return (
    <div>
      {copy}
      <input value={value} onChange={changeInput} />
    </div>
  );
}
