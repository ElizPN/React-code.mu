import React, { useState } from "react";
import { ChangeElement } from "../arrays/change_element_in_array";

const initNotes = [
  { text: "note1", isEdit: false },
  { text: "note2", isEdit: false },
  { text: "note3", isEdit: false },
];

export function EditListElementsWithInput2() {
  const [notesArray, setNotesArray] = useState(initNotes);

  function changeMode(index) {
    const newNotesArray = Object.assign([], notesArray);
    newNotesArray[index].isEdit = !newNotesArray[index].isEdit;
    setNotesArray(newNotesArray);
  }

  function changeElem(index, event) {
    const newNotesArray = Object.assign([], notesArray);
    newNotesArray[index].text = event.target.value;
    setNotesArray(newNotesArray);
  }

  const newNotesArray = notesArray.map((elem, index) => {
    let item;
    if (!elem.isEdit) {
      item = <span>{elem.text}</span>;
    } else {
      item = (
        <input
          value={elem.text}
          onChange={(event) => changeElem(index, event)}
        />
      );
    }
    return (
      <li key={index}>
        {item}
        <button onClick={() => changeMode(index)}>B</button>
      </li>
    );
  });

  return <ul>{newNotesArray}</ul>;
}
