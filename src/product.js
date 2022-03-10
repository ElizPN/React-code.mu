import React, { useState } from "react";

export function Product() {
  let [name, setName] = useState("prod"); // useState takes the initial value of the state
  let [cost, setCost] = useState("1000");

  // Using hendler functions
  //   function nameHandler() {
  //     setName("jacket");
  //   }

  //   function costHandler() {
  //     setCost("500");
  //   }

  //   return (
  //     <div>
  //       <span> {name}</span>
  //       <span> {cost}</span>
  //       <button onClick={nameHandler}>Shange name</button>
  //       <button onClick={costHandler}>Chacnge cost</button>
  //     </div>
  // It is not necessery to use hendler functions.
  //We can call our setName and setCost inside anonymous  arrow function

  return (
    <div>
      <span> {name}</span>
      <span> {cost}</span>
      <button
        onClick={() => {
          setName("jacket");
        }}
      >
        Shange name
      </button>
      <button
        onClick={() => {
          setCost(500);
        }}
      >
        Chacnge cost
      </button>
    </div>
  );
}
