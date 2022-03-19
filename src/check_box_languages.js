import React, { useState } from "react";

export function Languages() {
  let [checked1, setChecked1] = useState(true);
  let [checked2, setChecked2] = useState(true);
  let [checked3, setChecked3] = useState(true);

  return (
    <div>
      <p>Choose the languges you know</p>
      <input
        id="html"
        type="checkbox"
        checked={checked1}
        onChange={() => setChecked1(!checked1)}
      />
      <label htmlFor="html">HTML</label>

      <input
        id="js"
        type="checkbox"
        checked={checked2}
        onChange={() => setChecked2(!checked2)}
      />
      <label htmlFor="js">JavaScript</label>

      <input
        id="css"
        type="checkbox"
        checked={checked3}
        onChange={() => setChecked3(!checked3)}
      />
      <label htmlFor="css">CSS</label>

      <p>
        {checked1 ? "You know HTML! It is Great!" : "You have to learn HTML"}
      </p>
      <p>
        {checked2
          ? "You know JavaScript! It is Amazing!"
          : "You have to learn JavaScript"}
      </p>
      <p>
        {checked3
          ? "You know CSS! It is really Cool!"
          : "You have to learn CSS"}
      </p>
    </div>
  );
}
