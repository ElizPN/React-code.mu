import React, { useState } from "react";

export function EditLettersArray() {
  const [lettersArray, setLettersArray] = useState(["a", "b", "c", "d", "e"]);
  const [changeIndex, setChangeIndex] = useState(null);

  const result = lettersArray.map((elem, index) => {
    return (
      <li key={index}>
        {elem}{" "}
        <button
          onClick={() => {
            setChangeIndex(index); // rendering of components
          }}
        >
          Get index
        </button>
      </li>
    );
  });

  function changeItem(event) {
    let arrayBeforeIndex = lettersArray.slice(0, changeIndex);
    let arrayAfterIndex = lettersArray.slice(changeIndex + 1);

    return setLettersArray([
      ...arrayBeforeIndex,
      event.target.value,
      ...arrayAfterIndex,
    ]);
  }

  return (
    <div>
      <input
        value={
          changeIndex === 0 || changeIndex ? lettersArray[changeIndex] : ""
        }
        onChange={changeItem} // call handler that set new state to array
        onBlur={() => {
          setChangeIndex("");
        }}
      />
      {result}
    </div>
  );
}
