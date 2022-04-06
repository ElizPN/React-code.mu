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
      <button>save</button>
    </div>
  );
}
