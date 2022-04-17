import React, { useState } from "react";

export function Product({ id, name, cost, inCart, addToCart }) {
  return (
    <div>
      <span> name: {name}</span>
      <span> cost: {cost}</span>
      <span>{inCart ? "In Cart" : "Not in Cart"}</span>
      <button onClick={() => addToCart(id)}>Put to cart</button>
    </div>
  );
}
