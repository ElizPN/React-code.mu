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

function getInitObject() {
  return {
    id: id(),
    prop1: "jkjk",
    prop2: "uuu",
    prop3: "iui",
  };
}

export function FormToAddingElements4() {
  const [prodArray, setProdArray] = useState(initProds);
  const [obj, setObj] = useState(getInitObject());

  const initProdsList = prodArray.map((elem) => {
    return (
      <tr key={elem.id}>
        <td>{elem.name}</td>
        <td>{elem.catg}</td>
        <td>{elem.cost}</td>
      </tr>
    );
  });

  function addElement() {
    setProdArray(...prodArray, obj);
  }

  function changeProperty() {}

  return (
    <div>
      <table>
        <tbody>{initProdsList}</tbody>
      </table>

      <input value={obj.prop1} />
      <input value={obj.prop2} />
      <input value={obj.prop3} />
      <button onClick={addElement}></button>
    </div>
  );
}
