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
  const [noteArray, setNoteArray] = useState(initNotes);
  const [editId, setEditId] = useState(null);
  const [obj, setObj] = useState(getInitObj());

  const initNotesList = noteArray.map((elem) => {
    return (
      <p key={elem.id}>
        <span>{elem.prop1}</span>
        <span>{elem.prop2}</span>
        <span>{elem.prop3}</span>
        <button onClick={() => setEditId(elem.id)}>Change item</button>
      </p>
    );
  });

  function getValue(prop) {
    if (editId) {
      return noteArray.reduce(
        (res, elem) => (elem.id === editId ? elem[prop] : res),
        ""
      );
    } else {
      return obj[prop];
    }
  }
  function changeItem(prop, event) {
    const newNoteArray = noteArray.map((elem) =>
      elem.id === editId ? { ...elem, [prop]: event.target.value } : elem
    );
    if (editId) {
      setNoteArray(newNoteArray);
    } else {
      setObj({ ...obj, [prop]: event.target.value });
    }
  }

  function saveItem() {
    if (editId) {
      setEditId(null);
    } else {
      setNoteArray([...noteArray, obj]);
      setObj(getInitObj());
    }
  }

  return (
    <div>
      {initNotesList}
      <input
        value={getValue("prop1")}
        onChange={(event) => changeItem("prop1", event)}
      ></input>
      <input
        value={getValue("prop2")}
        onChange={(event) => changeItem("prop2", event)}
      ></input>
      <input
        value={getValue("prop3")}
        onChange={(event) => changeItem("prop3", event)}
      ></input>

      <button onClick={saveItem}>Save item</button>
    </div>
  );
}
