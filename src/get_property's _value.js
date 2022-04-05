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

export function GetPropertysValue() {
  const [notesArray, setNotesArray] = useState(initNotes);
  const [value, setValue] = useState("");

  let arrayList = notesArray.map((elem) => {
    return (
      <p key={elem.id}>
        <span>{elem.prop1}</span>
        <span>{elem.prop2}</span>
        <span>{elem.prop3}</span>
      </p>
    );
  });
  console.log(notesArray);

  const propertysValue = notesArray.reduce((res, elem) => {
    if (elem.id === id) {
      return elem[prop];
    } else {
      return res;
    }
  });

  console.log(propertysValue);

  return (
    <div>
      {arrayList}
      <button onClick={() => setValue(propertysValue)}>
        Get property's value
      </button>
      <p>Value:{value}</p>
    </div>
  );
}
