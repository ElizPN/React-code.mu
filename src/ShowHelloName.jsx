import React, { Component } from "react";

export function ShowHelloName() {
  function showMess(name) {
    alert("Hello " + name);
  }
  return (
    <div>
      {" "}
      <button
        onClick={() => {
          showMess("Jimmi");
        }}
      ></button>
    </div>
  );
}
