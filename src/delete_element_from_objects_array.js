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

const id = "IWSpfBPSV3SXgRF87uO74";

export function DeleteElementFromObjetsArray() {
  const [array, setAray] = useState(initNotes);

  function deleteElement(elementId) {
    setAray(
      array.filter((note) => {
        if (note.id !== elementId) {
          return true;
        }
      })
    );
  }

  const result = array.map((elem) => {
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
      {result}
      <button onClick={() => deleteElement(id)}>btn</button>
    </div>
  );
}