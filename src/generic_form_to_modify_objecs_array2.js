import React, { useState } from "react";
import { nanoid } from "nanoid";

// generate id
function id() {
  return nanoid();
}

const initProds = [
  { id: id(), name: "prod1", catg: "catg1", cost: 100 },
  { id: id(), name: "prod2", catg: "catg2", cost: 200 },
  { id: id(), name: "prod3", catg: "catg3", cost: 300 },
];

// generate object that we will add to array as new element.It will storage input's value.
//it must have same structure that elements of our array.

function getInitObj() {
  return {
    id: id(),
    name: "",
    catg: "",
    cost: "",
  };
}

export function GenericFormToModifyObjectsArray2() {
  const [prodArray, setProdArray] = useState(initProds);
  const [editId, setEditId] = useState(null);
  const [obj, setObj] = useState(getInitObj());

  // render array to table; create button to set state for id of currently changed elemet
  const prodArrayList = prodArray.map((elem) => {
    return (
      <tr key={elem.id}>
        <td>{elem.name}</td>
        <td>{elem.catg}</td>
        <td>{elem.cost}</td>
        <td>
          <button onClick={() => setEditId(elem.id)}>Change</button>
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
