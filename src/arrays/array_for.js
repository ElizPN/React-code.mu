import React, { Component } from "react";
export function ArrPush() {
  let arr = [];
  for (let i = 1; i <= 5; i++) {
    arr.push(<li key={i}>{i}</li>);
  }
  return <ul>{arr}</ul>;
}
