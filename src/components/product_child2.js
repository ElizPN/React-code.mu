import React, { useState } from "react";

export function ProductChild2({ name, cost, isEdit }) {
  return (
    <div>
      <span> {name}</span>
      <span> {cost}</span>
      <span> {isEdit}</span>
    </div>
  );
}
