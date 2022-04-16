import React, { useState } from "react";

export function ChildProduct({ name, cost }) {
  return (
    <p>
      <span>{name}</span>
      <span>{cost}</span>
    </p>
  );
}
