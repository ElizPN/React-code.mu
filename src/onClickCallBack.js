import React, { Component } from "react";
export function OnClickCallBack() {
  function showNumber(num) {
    alert(num);
  }
  return (
    <div>
      <button
        onClick={() => {
          showNumber(1);
        }}
      >
        act1
      </button>
      <button
        onClick={() => {
          showNumber(2);
        }}
      >
        act2
      </button>
      <button
        onClick={() => {
          showNumber(3);
        }}
      >
        act3
      </button>
    </div>
  );
}
