import React, { useState } from "react";

export function ProductFieldGrandchild3({ id, text, type, changeField }) {
  const [isEdit, setIsEdiit] = useState(false);

  return (
    <td>
      {isEdit ? (
        <input
          value={text}
          onChange={(event) => changeField(id, type, event)}
          onBlur={() => setIsEdiit(false)}
        />
      ) : (
        <span onClick={() => setIsEdiit(true)}>{text}</span>
      )}
    </td>
  );
}
