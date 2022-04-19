import React, { useState } from "react";

export function UserFieldGrandchild({ id, text, type, isEdit, editUser }) {
  return (
    <div>
      {isEdit ? (
        <input value={text} onChange={(event) => editUser(id, type, event)} />
      ) : (
        <span>{text}</span>
      )}
    </div>
  );
}
