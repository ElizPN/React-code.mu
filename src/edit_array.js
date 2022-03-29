import React, { useState } from "react";

export function EditArray() {
  let [notes, setNotes] = useState([1, 2, 3, 4, 5]);
  let [editNum, setEditNum] = useState(null); // этот стейт хранит номер элемента массива который редактируется в данный момент

  let result = notes.map((elem, index) => {
    return (
      <p key={index} onClick={() => setEditNum(index)}>
        {elem}
      </p>
    );
  });

  function changeItem(event) {
    let arrayBeforeIndex = notes.slice(0, editNum);
    let arrayAfterIndex = notes.slice(editNum + 1);
    setNotes([...arrayBeforeIndex, event.target.value, ...arrayAfterIndex]);
  }
  console.log(notes, editNum, notes[editNum]);
  return (
    <div>
      {result}
      <input
        value={editNum === 0 || editNum ? notes[editNum] : " "}
        onChange={changeItem}
      />{" "}
      we access to element of array and render it
    </div>
  );
}
