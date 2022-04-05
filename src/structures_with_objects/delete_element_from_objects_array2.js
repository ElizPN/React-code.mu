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

export function DeleteElementFromObjetsArray2() {
  const [prodArray, setProdArray] = useState(initProds);

  function deleteElem(id) {
    const elemForRemuve = prodArray.filter((elem) => elem.id !== id);
    setProdArray(elemForRemuve);
  }

  //   if (elem.id !== id) {
  //     return true;
  //   }

  console.log(initProds);

  const tableProd = prodArray.map((elem) => {
    return (
      <tr key={elem.id}>
        <td>{elem.name}</td>
        <td>{elem.catg}</td>
        <td>{elem.cost}</td>
        <td>
          <button
            onClick={() => {
              deleteElem(elem.id);
            }}
          >
            delete
          </button>
        </td>
      </tr>
    );
  });

  return (
    <table>
      <tbody>{tableProd}</tbody>
    </table>
  );
}
