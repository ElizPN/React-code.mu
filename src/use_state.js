import React, { useState } from "react"; // useState is Hook

export function State() {
  //  const state = useState("prod"); function call result - array with two elments (name of state and function for shanging name)
  // as we have two elements of array  - we can use destructuring:

  const [name, setName] = useState("prod");

  function clickHendler() {
    setName("New name");
  }

  return (
    <div>
      <span>{name}</span>
      <button onClick={clickHendler}></button>BTN
    </div>
  ); // let's render our state with name to some page
}
