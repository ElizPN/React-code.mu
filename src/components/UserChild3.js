import React, { useState } from "react";
import { UserFieldGrandchild3 } from "./UserFieldGrandchild3";

export function UserChild3({ id, name, surname, age, toggleMode }) {
  return (
    <tr>
      <UserFieldGrandchild3
        id={id}
        text={name}
        type="name"
        toggleMode={toggleMode}
      />

      <UserFieldGrandchild3
        id={id}
        text={surname}
        type="surname"
        toggleMode={toggleMode}
      />

      <UserFieldGrandchild3
        id={id}
        text={age}
        type="age"
        toggleMode={toggleMode}
      />
    </tr>
  );
}
