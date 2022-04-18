import React, { useState } from "react";

export function UserChild2({
  id,
  name,
  surname,
  age,
  isEdit,
  toggleMode,
  editProd,
}) {
  return (
    <div>
      {isEdit ? (
        <input value={name} onChange={(event) => editProd(id, name, event)} />
      ) : (
        <span>{name}</span>
      )}
      {isEdit ? (
        <input
          value={surname}
          onChange={(event) => editProd(id, surname, event)}
        />
      ) : (
        <span>{surname}</span>
      )}
      {isEdit ? (
        <input value={age} onChange={(event) => editProd(id, age, event)} />
      ) : (
        <span>{age}</span>
      )}
      <button onClick={() => toggleMode(id)}>{isEdit ? "Save" : "Edit"}</button>
    </div>
  );
}
