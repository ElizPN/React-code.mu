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

  return (
    <div>
      <p>{elem}</p>
      <button onClick={() => setIsEdiit(true)}>Edit value</button>
      <button>Show value</button>
    </div>
  );
}
