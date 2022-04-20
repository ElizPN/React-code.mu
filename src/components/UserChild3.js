import React, { useState } from "react";
import { UserFieldGrandchild3 } from "./UserFieldGrandchild3";

export function UserChild3({ id, name, surname, age, changeField }) {
  return (
    <tr>
      <UserFieldGrandchild3
        id={id}
        text={name}
        type="name"
        changeField={changeField}
      />

      <UserFieldGrandchild3
        id={id}
        text={surname}
        type="surname"
        changeField={changeField}
      />

      <UserFieldGrandchild3
        id={id}
        text={age}
        type="age"
        changeField={changeField}
      />
    </tr>
  );
}
