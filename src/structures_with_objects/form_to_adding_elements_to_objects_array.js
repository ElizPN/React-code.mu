import React, { useState } from "react";
import { nanoid } from "nanoid";

function id() {
  return nanoid();
}

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

export function FormToAddingElements() {
  const [noteArray, setNoteArray] = useState(initNotes);

  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [inputValue3, setInputValue3] = useState("");

  const noteArrayList = noteArray.map((elem) => {
    return (
      <p key={elem.id}>
        <span>{elem.prop1}</span>
        <span>{elem.prop2}</span>
        <span>{elem.prop3}</span>
      </p>
    );
  });

  function addElement() {
    let objectOfValues = {
      id: id(),
      prop1: inputValue1,
      prop2: inputValue2,
      prop3: inputValue3,
    };
    return setNoteArray([...noteArray, objectOfValues]);
  }

  return (
    <div>
      {noteArrayList}
      <input
        value={inputValue1}
        onChange={(event) => setInputValue1(event.target.value)}
      ></input>
      <input
        value={inputValue2}
        onChange={(event) => setInputValue2(event.target.value)}
      ></input>
      <input
        value={inputValue3}
        onChange={(event) => setInputValue3(event.target.value)}
      ></input>
      <button onClick={addElement}>save</button>
    </div>
  );
}
