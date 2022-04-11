import React, { useState } from "react";
import { nanoid } from "nanoid";

function id() {
  return nanoid();
}

const initNotes = [
  {
    id: id(),
    name: "name1",
    desc: "long description 1",
    show: false,
  },
  {
    id: id(),
    name: "name2",
    desc: "long description 2",
    show: false,
  },
  {
    id: id(),
    name: "name3",
    desc: "long description 3",
    show: false,
  },
];
export function ShowArrayInParagraph() {
  const [notesArray, setNotesArray] = useState(initNotes);

  function showDescrip(id) {
    const newNotesArray = notesArray.map((elem) => {
      if (elem.id === id) {
        console.log("equal id", elem);
        return { ...elem, show: !elem.show };
      } else {
        console.log("not equal", elem);
        return elem;
      }
    });
    setNotesArray(newNotesArray);
  }

  const notesArrayList = notesArray.map((elem) => {
    let descrip;
    if (elem.show) {
      descrip = <i>{elem.desc}</i>;
    }

    return (
      <p key={elem.id}>
        {elem.name} {descrip}
        <button onClick={() => showDescrip(elem.id)}>Show</button>
      </p>
    );
  });

  return <div>{notesArrayList}</div>;
}
