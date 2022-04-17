import React, { useState } from "react";

export function Product({ id, name, cost }) {
  return (
    <div>
      <span> id: {id}</span>
      <span> name: {name}</span>
      <span> cost: {cost}</span>
    </div>
  );
}
