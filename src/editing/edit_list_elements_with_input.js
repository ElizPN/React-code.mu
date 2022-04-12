import React, { useState } from "react";

const initNotes = [
  { text: "note1", isEdit: false },
  { text: "note2", isEdit: false },
  { text: "note3", isEdit: false },
];

export function EditListElementsWithInput() {
  const [notesArray, setNotesArray] = useState(initNotes);

  function startEdit(index) {
    const copyNotesArray = Object.assign([], notesArray);
    copyNotesArray[index].isEdit = true;
    setNotesArray(copyNotesArray);
  }

  const notesArrayLiist = notesArray.map((elem, index) => {
    let item;
    if (!elem.isEdit) {
      item = <span onClick={() => startEdit(index)}>{elem.text}</span>;
    } else {
      item = <input value={elem.text} />;
    }

    return <li key={index}>{item}</li>;
  });

  return <ul>{notesArrayLiist}</ul>;
}
