import React, { useState } from "react";
import { nanoid } from "nanoid";

const initProds = [
  { id: id(), name: "prod1", catg: "catg1", cost: 100 },
  { id: id(), name: "prod2", catg: "catg2", cost: 200 },
  { id: id(), name: "prod3", catg: "catg3", cost: 300 },
];

function id() {
  return nanoid();
}

export function EditObjectArray2() {
  const [prodArray, setProdArray] = useState(initProds);

  const prodArrayList = prodArray.map((elem) => {
    return (
      <tr key={elem.id}>
        <td>{elem.name}</td>
        <td>{elem.catg}</td>
        <td>{elem.cost}</td>
        <td>
          <button>Change</button>
        </td>
      </tr>
    );
  });

  return (
    <table>
      <tbody>{prodArrayList}</tbody>
    </table>
  );
}
