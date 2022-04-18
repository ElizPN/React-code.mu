import React, { useState } from "react";

export function ProductChild2({ id, name, cost, isEdit }) {
  return (
    <div>
      name: {isEdit ? <input value={name} /> : <span>{name}</span>}
      cost: {isEdit ? <input value={cost} /> : <span>{cost}</span>}
      {/* <button onClick={() => toggleMode(id)}>{isEdit ? "Save" : "Edit"}</button> */}
    </div>
  );
}
