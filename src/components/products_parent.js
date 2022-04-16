import React, { useState } from "react";
import { Product } from "./product_child";
import { nanoid } from "nanoid";

function id() {
  return nanoid();
}

const initProds = [
  { id: id(), name: "product1", cost: 100 },
  { id: id(), name: "product2", cost: 200 },
  { id: id(), name: "product3", cost: 300 },
];

export function Products() {
  const [prodsArray, setProdsArray] = useState(initProds);

  const prodsArrayResult = prodsArray.map((prod) => {
    return <Product key={prod.id} name={prod.name} cost={prod.cost} />;
  });

  return <div>{prodsArrayResult}</div>;
}
