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

export function GenericFormToModifyObjectArray() {
  const [noteArray, setNoteArray] = useState(initNotes);
  const [editId, setEditId] = useState(null);

  const noteArrayList = noteArray.map((elem) => {
    return (
      <p key={elem.id}>
        <span>{elem.prop1}</span>
        <span>{elem.prop2}</span>
        <span>{elem.prop3}</span>
        <button onClick={() => setEditId(elem.id)}>edit</button>
      </p>
    );
  });

  function getValue(prop) {
    return noteArray.reduce((res, elem) => {
      if (elem.id === editId) {
        return elem[prop];
      } else {
        return res;
      }
    }, "");
  }

  function changeItem(prop, event) {
    let newItem = noteArray.map((elem) => {
      if (elem.id === editId) {
        return { ...elem, [prop]: event.target.value };
      } else {
        return elem;
      }
    });
    setNoteArray(newItem);
  }

  return (
    <div>
      {noteArrayList}

      <input
        value={getValue("prop1")}
        onChange={(event) => changeItem("prop1", event)}
      />
      <input
        value={getValue("prop2")}
        onChange={(event) => changeItem("prop2", event)}
      />
      <input
        value={getValue("prop3")}
        onChange={(event) => changeItem("prop3", event)}
      />
      <button
        onClick={() => {
          setEditId(null);
        }}
      >
        Save
      </button>
    </div>
  );
}
