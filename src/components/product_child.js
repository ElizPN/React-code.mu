import React, { useState } from "react";

export function Product({ name, cost }) {
  return (
    <div>
      <span> name: {name}</span>
      <span> cost: {cost}</span>
    </div>
  );
}
