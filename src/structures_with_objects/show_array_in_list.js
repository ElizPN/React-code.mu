import React, { useState } from "react";
import { nanoid } from "nanoid";

function id() {
  return nanoid();
}

const initProds = [
  {
    id: id(),
    name: "prod1",
    cost: "cost1",
    desc: "long description 1",
    comm: "my super comment 1",
    showDesc: false,
    showComm: false,
  },
  {
    id: id(),
    name: "prod2",
    cost: "cost2",
    desc: "long description 2",
    comm: "my super comment 2",
    showDesc: false,
    showComm: false,
  },
  {
    id: id(),
    name: "prod3",
    cost: "cost3",
    desc: "long description 3",
    comm: "my super comment 3",
    showDesc: false,
    showComm: false,
  },
];

export function ShowArrayInList() {
  const [prodsArray, setProdsArray] = useState(initProds);

  const prodsArraylist = prodsArray.map((elem) => {
    return (
      <li key={elem.id}>
        {elem.name}, {elem.cost}, {elem.desc},{elem.comm}{" "}
      </li>
    );
  });

  return <ul>{prodsArraylist}</ul>;
}
