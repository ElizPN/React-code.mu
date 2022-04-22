import React, { useState } from "react";

export function Verdict({ temp }) {
  let result;
  if (temp < 0) {
    result = "ice";
  }
  if (temp > 0 && temp < 100) {
    result = "liquid";
  }
  if (temp > 100) {
    result = "gas";
  }

  return <span>{result}</span>;
}
