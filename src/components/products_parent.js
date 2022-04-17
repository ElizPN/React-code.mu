import React, { useState } from "react";
import { Product } from "./product_child";
import { nanoid } from "nanoid";

function id() {
  return nanoid();
}

const initProds = [
  { id: id(), name: "product1", cost: 100, inCart: false },
  { id: id(), name: "product2", cost: 200, inCart: false },
  { id: id(), name: "product3", cost: 300, inCart: false },
];

export function Products() {
  const [prodsArray, setProdsArray] = useState(initProds);

  const prodsArrayResult = prodsArray.map((prod) => {
    return (
      <Product
        key={prod.id}
        id={prod.id}
        name={prod.name}
        cost={prod.cost}
        inCart={prod.inCart}
        addToCart={addToCart}
      />
    );
  });

  function addToCart(id) {
    const newProdsArray = prodsArray.map((prod) => {
      if (prod.id === id) {
        prod.inCart = true;
      }
      return prod;
    });
    setProdsArray(newProdsArray);
  }

  return <div>{prodsArrayResult}</div>;
}
