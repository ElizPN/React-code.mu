import React, { useState } from "react";

export function UserChild({ id, name, surname, age, ban, userBan }) {
  return (
    <div>
      <span>name: {name}</span>
      <span> surname: {surname}</span>
      <span>age: {age}</span>
      <span>{ban ? "User is banned" : "User is not banned"}</span>
      <button onClick={() => userBan(id)}>BAN</button>
    </div>
  );
}
