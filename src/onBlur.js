import React, { useState } from "react";

export function OnBlur() {
  let [lettersArray, setLettersArray] = useState(["a", "b", "c", "d", "e"]);
  let [inputValue, setInputValue] = useState("");

  function addElement() {
    const newLettersArray = [...lettersArray, inputValue];
    setLettersArray(newLettersArray);
  }

  return (
    <div>
      <input
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
        onBlur={addElement}
      />
      <ul>
        {lettersArray.map((elem, index) => (
          <li key={index}>{elem}</li>
        ))}
      </ul>
    </div>
  );
}
