import React, { useState } from "react";
import { nanoid } from "nanoid";

function id() {
  return nanoid();
}

const initProds = [
  { id: id(), name: "prod1", catg: "catg1", cost: 100 },
  { id: id(), name: "prod2", catg: "catg2", cost: 200 },
  { id: id(), name: "prod3", catg: "catg3", cost: 300 },
];

export function RenderInitProds() {
  const [prodArray, setProdArray] = useState(initProds);

  const initProdsList = prodArray.map((elem) => {
    return (
      <p>
        <span>{elem.name}</span>
        <span>{elem.catg}</span>
        <span>{elem.cost}</span>
      </p>
    );
  });

  return <div>{initProdsList}</div>;
}
