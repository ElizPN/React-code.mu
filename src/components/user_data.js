import React, { useState } from "react";

export function UserData({ name, surname, age }) {
  return (
    <tr>
      <td>{name}</td>
      <td>{surname}</td>
      <td>{age}</td>
    </tr>
  );
}
