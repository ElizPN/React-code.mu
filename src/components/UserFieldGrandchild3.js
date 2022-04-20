import React, { useState } from "react";

export function UserFieldGrandchild3({ id, text, type, toggleMode }) {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <td>
      {isEdit ? (
        <input
          value={text}
          onChange={(event) => toggleMode(id, type, event)}
          onBlur={() => setIsEdit(false)}
        />
      ) : (
        <span onClick={() => setIsEdit(true)}>{text}</span>
      )}
    </td>
  );
}
