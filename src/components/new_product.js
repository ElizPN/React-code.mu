import React, { useState } from "react";

export function NewProduct({ name, cost }) {
  return (
    <p>
      <span>{name}</span>
      <span>{cost}</span>
    </p>
  );
}
