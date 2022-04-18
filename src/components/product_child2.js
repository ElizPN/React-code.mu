import React, { useState } from "react";

export function ProductChild2({ id, name, cost, isEdit }) {
  return (
    <div>
      <span> {name}</span>
      <span> {cost}</span>
      <span> {isEdit}</span>
      <button onClick={() => toggleMode(id)}>Edit</button>
    </div>
  );
}
