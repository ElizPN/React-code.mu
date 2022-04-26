import React, { Component } from "react";
export function FirstEvent() {
  function func(event) {
    console.log(event.target); // where the click happened
  }

  return (
    <div>
      <button onClick={func}>act</button>
    </div>
  );
}
