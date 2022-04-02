import React, { useState } from "react";

const initNotes = [
  {
    id: "GYi9G_uC4gBF1e2SixDvu",
    prop1: "value11",
    prop2: "value12",
    prop3: "value13",
  },
  {
    id: "IWSpfBPSV3SXgRF87uO74",
    prop1: "value21",
    prop2: "value22",
    prop3: "value23",
  },
  {
    id: "JAmjRlfQT8rLTm5tG2m1L",
    prop1: "value31",
    prop2: "value32",
    prop3: "value33",
  },
];

const id = "JAmjRlfQT8rLTm5tG2m1L";
const prop = "prop2";
const value = "value22 !!";

export function ChangePropertyOfObject() {
  const [notesArray, setNotesArray] = useState(initNotes);

  const result = notesArray.map((elem) => {
    return (
      <p key={elem.id}>
        <span>{elem.prop1}</span>
        <span>{elem.prop2}</span>
        <span>{elem.prop3}</span>
      </p>
    );
  });

  function changeProperty() {
    const newNotesArray = notesArray.map((elem) => {
      if (elem.id !== id) {
        return elem;
      }

      const copy = Object.assign({}, elem);
      copy[prop] = value;
      return copy;
    });
    setNotesArray(newNotesArray);
  }

  return (
    <div>
      {result}
      <button onClick={changeProperty}>Change property of element</button>
    </div>
  );
}
