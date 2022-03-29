import React, { useState } from "react";

export function EditArray() {
  let [notes, setNotes] = useState([1, 2, 3, 4, 5]);

  let result = notes.map((elem, index) => {
    return <p key={index}>{elem}</p>;
  });

  return <div>{result}</div>;
}
