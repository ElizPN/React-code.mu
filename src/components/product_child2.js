import React, { useState } from "react";
import { ProductFieldGrandchild } from "./product_field_grandchild";

export function ProductChild2({
  id,
  name,
  cost,
  isEdit,
  toggleMode,
  editProd,
}) {
  return (
    <div>
      name:
      <ProductFieldGrandchild
        key={id}
        id={id}
        text={name} //?
        type="name" //?
        isEdit={isEdit}
        editProd={editProd}
      />
      cost:
      <ProductFieldGrandchild
        key={id}
        id={id}
        text={cost}
        type="cost"
        isEdit={isEdit}
        editProd={editProd}
      />
      <button onClick={() => toggleMode(id)}>{isEdit ? "Save" : "Edit"}</button>
    </div>
  );
}
