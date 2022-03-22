import React, { useState } from "react";

export function RadioChooseLanguage() {
  let [value, setValue] = useState("");

  function compliment() {
    if (value === "JavaScript") {
      alert("Very cool");
    }
  }

  function changeHendler(event) {
    setValue(event.target.value);
  }

  return (
    <div>
      <p>Your favorite language</p>
      <input
        type="radio"
        id="html"
        name="radio"
        value="HTML"
        checked={value === "HTML" ? true : false}
        onChange={changeHendler}
      />
      <label htmlFor="html">HTML</label>

      <input
        type="radio"
        id="css"
        name="radio"
        value="CSS"
        checked={value === "CSS" ? true : false}
        onChange={changeHendler}
      />
      <label htmlFor="css">CSS</label>

      <input
        type="radio"
        id="java_script"
        name="radio"
        value="JavaScript"
        checked={value === "JavaScript" ? true : false}
        onChange={changeHendler}
      />
      <label htmlFor="java_script">JavaScript</label>

      <div>
        {value} {compliment()}
      </div>
    </div>
  );
}
