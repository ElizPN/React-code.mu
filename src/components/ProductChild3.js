import React, { useState } from "react";
import { ProductFieldGrandchild3 } from "./ProductFieldGrandchild3";

export function ProductChild3({ id, name, cost, catg, changeField }) {
  return (
    <tr>
      <ProductFieldGrandchild3
        id={id}
        text={name}
        type="name"
        changeField={changeField}
      />
      <ProductFieldGrandchild3
        id={id}
        text={cost}
        type="cost"
        changeField={changeField}
      />
      <ProductFieldGrandchild3
        id={id}
        text={catg}
        type="catg"
        changeField={changeField}
      />
    </tr>
  );
}
