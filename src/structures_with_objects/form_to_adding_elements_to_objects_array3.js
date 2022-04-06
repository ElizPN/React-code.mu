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

function getInitObject() {
  return {
    id: id(),
    prop1: "",
    prop2: "",
    prop3: "",
  };
}

export function FormToAddingElements3() {
  const [prodArray, setProdArray] = useState(initNotes);
  const [obj, setObj] = useState(getInitObject());

  const initNotesList = prodArray.map((elem) => {
    return (
      <p key={elem.id}>
        <span>{elem.prop1}</span>
        <span>{elem.prop2}</span>
        <span>{elem.prop3}</span>
      </p>
    );
  });

  function changeProp(prop, event) {
    setObj({ ...obj, [prop]: event.target.value });
  }

  function addElement() {
    setProdArray([...prodArray, obj]);
    setObj(getInitObject());
  }

  return (
    <div>
      {initNotesList}
      <br />
      <input
        value={obj.prop1}
        onChange={(event) => changeProp("prop1", event)}
      ></input>
      <input
        value={obj.prop2}
        onChange={(event) => changeProp("prop2", event)}
      ></input>
      <input
        value={obj.prop3}
        onChange={(event) => changeProp("prop3", event)}
      ></input>
      <button onClick={addElement}></button>
    </div>
  );
}
