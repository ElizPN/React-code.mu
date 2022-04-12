import React, { useState } from "react";

const initNotes = [
  { text: "note1", isEdit: false },
  { text: "note2", isEdit: false },
  { text: "note3", isEdit: false },
];

export function EditListElementsWithInput() {
  const [notesArray, setNotesArray] = useState(initNotes);

  function startEdit(index) {
    const newNotesArray = Object.assign([], notesArray);
    newNotesArray[index].isEdit = true;
    setNotesArray(newNotesArray);
  }

  function changeElem(index, event) {
    const newNotesArray = Object.assign([], notesArray);
    newNotesArray[index].text = event.target.value;
    setNotesArray(newNotesArray);
  }

  function stopEdit(index) {
    const newNotesArray = Object.assign([], notesArray);
    newNotesArray[index].isEdit = false;
    setNotesArray(newNotesArray);
  }

  const notesArrayLiist = notesArray.map((elem, index) => {
    let item;
    if (!elem.isEdit) {
      item = <span onClick={() => startEdit(index)}>{elem.text}</span>;
    } else {
      item = (
        <input
          value={elem.text}
          onChange={(event) => changeElem(index, event)}
          onBlur={() => stopEdit(index)}
        />
      );
    }

    return <li key={index}>{item}</li>;
  });

  return <ul>{notesArrayLiist}</ul>;
}
