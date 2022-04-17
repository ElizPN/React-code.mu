import React, { useState } from "react";

export function UserChild({ id, name, surname, age }) {
  return (
    <div>
      <span>id: {id}</span>
      <span>name: {name}</span>
      <span> surname: {surname}</span>
      <span>age: {age}</span>
    </div>
  );
}
