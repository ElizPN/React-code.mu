import React, { useState } from "react";
import { nanoid } from "nanoid";
import { UserData } from "./user_data";

function id() {
  return nanoid();
}

const users = [
  { id: id(), name: "Ron", surname: "Rogan", age: 30 },
  { id: id(), name: "Kenny", surname: "Kalvin", age: 31 },
  { id: id(), name: "Nicolas", surname: "Tiger", age: 33 },
];

export function ParentComponennt() {
  const userResult = users.map((user) => {
    return (
      <UserData
        key={user.id}
        name={user.name}
        surname={user.name}
        age={user.age}
      />
    );
  });

  return (
    <table>
      <tbody>{userResult}</tbody>
    </table>
  );
}
