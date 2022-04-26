import React, { Component } from "react";

export function SecondEvent() {
  function func(arg, event, arg2) {
    console.log(arg, event, arg2);
  }

  return (
    <div>
      <button onClick={(event) => func("eee", event, "niiiii")}>act</button>
    </div>
  );
}
