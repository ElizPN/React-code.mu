import React, { useState } from "react";

export function ReplaceParagraphToInput2() {
  const [paragValue, setParagValue] = useState("some text");
  const [isEdit, setIsEdiit] = useState(false);

  let elem;
  if (!isEdit) {
    elem = <span>{paragValue}</span>;
  } else {
    elem = (
      <input
        value={paragValue}
        onChange={(event) => setParagValue(event.target.value)}
      />
    );
  }

  return (
    <div>
      <p>{elem}</p>
      <button onClick={() => setIsEdiit(true)}>Edit value</button>
      <button onClick={() => setIsEdiit(false)}>Show value</button>
    </div>
  );
}
