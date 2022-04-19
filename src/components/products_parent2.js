import React, { useState } from "react";
import { nanoid } from "nanoid";
import { ProductChild2 } from "./product_child2";

function id() {
  return nanoid();
}

const initProds = [
  { id: id(), name: "product1", cost: 100, isEdit: false },
  { id: id(), name: "product2", cost: 200, isEdit: false },
  { id: id(), name: "product3", cost: 300, isEdit: false },
];

export function ProductsParent2() {
  const [prodsArray, setProdsArray] = useState(initProds);

  const prodsArrayResult = prodsArray.map((prod) => {
    return (
      <ProductChild2
        key={prod.id}
        id={prod.id}
        name={prod.name}
        cost={prod.cost}
        isEdit={prod.isEdit}
        toggleMode={toggleMode}
        editProd={editProd}
      />
    );
  });

  function toggleMode(id) {
    const newProdsArray = prodsArray.map((prod) => {
      if (prod.id === id) {
        prod.isEdit = !prod.isEdit;
      }
      return prod;
    });
    setProdsArray(newProdsArray);
  }

  function editProd(id, field, event) {
    // field - this is value of one of our properties(name or cost)
    const newProdsArray = prodsArray.map((prod) => {
      if (prod.id === id) {
        prod[field] = event.target.value; // here we edit value of property (name or cost)
      }
      return prod;
    });
    setProdsArray(newProdsArray);
  }

  return <div>{prodsArrayResult}</div>;
}
