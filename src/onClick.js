import React, { Component } from "react";

export function ShowAfterClick() {
  function show1() {
    alert(1);
  }
  function show2() {
    alert(2);
  }
  return (
    <div>
      <button onClick={show1}>act1</button>
      <button onClick={show2}>act2</button>
    </div>
  );
}
