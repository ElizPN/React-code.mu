import React, { useState } from "react";

export function ProductChild2({ id, name, cost, isEdit }) {
  return (
    <div>
      name:{" "}
      {isEdit ? (
        <input value={name} onChange={(event) => editProd(id, "name", event)} />
      ) : (
        <span>{name}</span>
      )}
      cost:{" "}
      {isEdit ? (
        <input value={cost} onChange={(event) => editProd(id, "cost", event)} />
      ) : (
        <span>{cost}</span>
      )}
      {/* <button onClick={() => toggleMode(id)}>{isEdit ? "Save" : "Edit"}</button> */}
    </div>
  );
}
