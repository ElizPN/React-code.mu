import React, { useState } from "react";

export function UserChild2({
  id,
  name,
  surname,
  age,
  isEdit,
  toggleMode,
  editUser,
}) {
  return (
    <div>
      {isEdit ? (
        <input value={name} onChange={(event) => editUser(id, "name", event)} />
      ) : (
        <span>{name}</span>
      )}
      {isEdit ? (
        <input
          value={surname}
          onChange={(event) => editUser(id, "surname", event)}
        />
      ) : (
        <span>{surname}</span>
      )}
      {isEdit ? (
        <input value={age} onChange={(event) => editUser(id, "age", event)} />
      ) : (
        <span>{age}</span>
      )}
      <button onClick={() => toggleMode(id)}>{isEdit ? "Save" : "Edit"}</button>
    </div>
  );
}
