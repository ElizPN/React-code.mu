import React, { useState } from "react";

export function FlipParagraphToInput() {
  const [paragValue, setParagValue] = useState("some text");
  const [isEdit, setIsEdiit] = useState(false); // true - paragraph is editing; false - the text shows

  let elem;
  if (!isEdit) {
    elem = <span>{paragValue}</span>;
  } else {
    elem = <input value={paragValue} />;
  }

  return (
    <p>
      <span>{elem}</span>
    </p>
  );
}
