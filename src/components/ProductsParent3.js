import React, { useState } from "react";
import { nanoid } from "nanoid";
import { ProductChild3 } from "./ProductChild3";

function id() {
  return nanoid();
}

const initProds = [
  { id: id(), name: "prod1", cost: "cost1", catg: "catg1" },
  { id: id(), name: "prod2", cost: "cost2", catg: "catg2" },
  { id: id(), name: "prod3", cost: "cost3", catg: "catg3" },
];

export function ProductsParent3() {
  const [prodsArray, setProdsArray] = useState(initProds);

  // change value of field in our products (our fields : name, cost, catg); we will call this function in onChange attribute inside input.
  function changeField(id, field, event) {
    const newProdsArray = prodsArray.map((prod) => {
      if (prod.id === id) {
        prod[field] = event.target.value;
      }
      return prod;
    });
    setProdsArray(newProdsArray);
  }

  const rows = prodsArray.map((prod) => {
    return (
      <ProductChild3
        key={prod.id}
        id={prod.id}
        name={prod.name}
        cost={prod.cost}
        catg={prod.catg}
        changeField={changeField}
      />
    );
  });

  return (
    <div>
      <table>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}
