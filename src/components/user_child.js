import React, { useState } from "react";

export function UserChild({ name, surname, age }) {
  return (
    <div>
      <span>name: {name}</span>
      <span> surname: {surname}</span>
      <span>age: {age}</span>
    </div>
  );
}
