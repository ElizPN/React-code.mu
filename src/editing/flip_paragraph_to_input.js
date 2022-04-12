import React, { useState } from "react";

export function FlipParagraphToInput() {
  const [paragValue, setParagValue] = useState("some text");
  const [isEdit, setIsEdiit] = useState(false); // true - paragraph is editing; false - the text shows

  let elem;
  if (!isEdit) {
    elem = <span>{paragValue}</span>; // show paragrarh with text
  } else {
    elem = (
      <input
        value={paragValue} // show input with text
        onChange={(event) => setParagValue(event.target.value)} // give possible to change value of input
        onBlur={() => setIsEdiit(false)} // change to mode "show"
      />
    );
  }

  return (
    <p>
      <span onClick={() => setIsEdiit(true)}>{elem}</span>{" "}
      {/*change to mode "edit" */}
    </p>
  );
}
