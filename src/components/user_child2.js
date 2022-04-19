import React, { useState } from "react";
import { UserFieldGrandchild } from "./user_field_grandchild";

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
    // add dependens from value of "isEdit" property (we will have ither input or span)
    <div>
      name:
      <UserFieldGrandchild
        id={id}
        text={name}
        type="name"
        isEdit={isEdit}
        editUser={editUser}
      />
      surname:
      <UserFieldGrandchild
        id={id}
        text={surname}
        type="surname"
        isEdit={isEdit}
        editUser={editUser}
      />
      age:
      <UserFieldGrandchild
        id={id}
        text={age}
        type="age"
        isEdit={isEdit}
        editUser={editUser}
      />
      {/* {isEdit ? (
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
      )} */}
      <button onClick={() => toggleMode(id)}>{isEdit ? "Save" : "Edit"}</button>
    </div>
  );
}
