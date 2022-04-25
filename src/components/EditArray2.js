import React, { useState } from "react";

export function EditArray2() {
  const [notesArray, setNotesArray] = useState([1, 2, 3, 4, 5]);
  const [editIndex, setEditIndex] = useState(null);

  const resultArray = notesArray.map((note, index) => (
    <p key={index} onClick={() => setEditIndex(index)}>
      {note}
    </p>
  ));

  function changeItem(event) {
    // const arrayBeforeIndex = notesArray.slice(0, editIndex);
    // const arrayAfterIndex = notesArray.slice(editIndex + 1);

    // const newNotesArray = [
    //   ...arrayBeforeIndex,
    //   event.target.value,
    //   ...arrayAfterIndex,
    // ];
    // setNotesArray(newNotesArray);
    const newNotesArray = Object.assign([], notesArray);
    newNotesArray[editIndex] = event.target.value;
    setNotesArray(newNotesArray);
  }
  const currentEditValue = editIndex === null ? "" : notesArray[editIndex]; // to avoid initial undefined value

  return (
    <div>
      {resultArray}
      <input value={currentEditValue} onChange={changeItem} />
    </div>
  );
}
