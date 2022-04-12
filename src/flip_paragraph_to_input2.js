import React, { useState } from "react";

export function FlipParagraphToInput2() {
  const [paragValue, setParagValue] = useState("some text");
  const [isEdit, setIsEdiit] = useState(false);

  return <p>{paragValue}</p>;
}
