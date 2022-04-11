import React, { useState } from "react";

export function ShowTextInParagraphs() {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);

  let textElem1;
  if (visible1) {
    textElem1 = <p>First text</p>;
  }

  let textElem2;
  if (visible2) {
    textElem2 = <p>Second text</p>;
  }

  let textElem3;
  if (visible3) {
    textElem3 = <p>Third text</p>;
  }

  return (
    <div>
      {textElem1}
      {textElem2}
      {textElem3}

      <button onClick={() => setVisible1(!textElem1)}>
        {visible1 ? "Hide First" : "Show First"}
      </button>
      <button onClick={() => setVisible2(!textElem2)}>
        {visible2 ? "Hide Second" : "Show Second"}
      </button>
      <button onClick={() => setVisible3(!textElem3)}>
        {visible3 ? "Hide Third" : "Show Third"}
      </button>
    </div>
  );
}
