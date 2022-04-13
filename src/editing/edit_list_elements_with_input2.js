import React, { useState } from "react";

const initNotes = [
  { text: "note1", isEdit: false },
  { text: "note2", isEdit: false },
  { text: "note3", isEdit: false },
];

export function EditListElementsWithInput2() {
  const [notesArray, setNotesArray] = useState(initNotes);

  const newNotesArray = notesArray.map((elem, index) => {
    return <li key={index}>{elem.text}</li>;
  });

  return <ul>{newNotesArray}</ul>;
}
