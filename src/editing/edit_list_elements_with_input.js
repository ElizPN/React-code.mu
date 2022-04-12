import React, { useState } from "react";

const initNotes = [
  { text: "note1", isEdit: true },
  { text: "note2", isEdit: false },
  { text: "note3", isEdit: false },
];

export function EditListElementsWithInput() {
  const [notesArray, setNotesArray] = useState(initNotes);
  const [isEdit, setIsEdiit] = useState(false);

  const notesArrayLiist = notesArray.map((elem, index) => {
    let item;
    if (!elem.isEdit) {
      item = <span>{elem.text}</span>;
    } else {
      item = <input value={elem.text} />;
    }

    return <li key={index}>{item}</li>;
  });

  return <ul>{notesArrayLiist}</ul>;
}
