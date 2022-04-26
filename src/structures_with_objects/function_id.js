import React, { Component } from "react";
import { nanoid } from "nanoid";

function id() {
  return nanoid();
}

export function SomeFun() {
  const prods = [
    { id: id(), name: "product1", cost: 100 },
    { id: id(), name: "product2", cost: 200 },
    { id: id(), name: "product3", cost: 300 },
  ];
  const newProds = prods.map(function(elem) {
    return (
      <li key={elem.id}>
        {" "}
        ID: {elem.id}, Name: {elem.name}, Cost: {elem.cost}
      </li>
    );
  });

  return <ul>{newProds}</ul>;
}
