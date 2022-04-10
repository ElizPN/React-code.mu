import React, { useState } from "react";
import { nanoid } from "nanoid";

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

function id() {
  return nanoid();
}

function getInitObj() {
  return {
    id: id(),
    prop1: "",
    prop2: "",
    prop3: "",
  };
}

export function GenericFormToModifyObjectsArray() {
  const [notArray, setNoteArray] = useState(initNotes);
  const [editId, setEditId] = useState(null);
  const [obj, setObj] = useState(getInitObj());

  const initNotesList = notArray.map((elem) => {
    return (
      <p key={elem.id}>
        <span>{elem.prop1}</span>
        <span>{elem.prop2}</span>
        <span>{elem.prop3}</span>
        <button onClick={() => setEditId(elem.id)}></button>
      </p>
    );
  });

  return <div>{initNotesList}</div>;
}
