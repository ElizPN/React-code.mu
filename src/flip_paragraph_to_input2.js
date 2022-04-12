import React, { useState } from "react";

export function FlipParagraphToInput2() {
  const [paragValue, setParagValue] = useState("some text");
  const [isEdit, setIsEdiit] = useState(false);

  let elem;
  if (!isEdit) {
    elem = <span>{paragValue}</span>;
  } else {
    elem = <input value={paragValue} />;
  }

  return <p>{elem}</p>;
}
