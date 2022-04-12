import React, { useState } from "react";

const initNotes = [
  { text: "note1", isEdit: false },
  { text: "note2", isEdit: false },
  { text: "note3", isEdit: false },
];

export function EditListElementsWithInput() {
  const [notesArray, setNotesArray] = useState(initNotes);
  const [isEdit, setIsEdiit] = useState(false);

  return <ul>mm</ul>;
}
