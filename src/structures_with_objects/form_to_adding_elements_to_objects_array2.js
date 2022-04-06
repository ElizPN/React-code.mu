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

export function FormToAddingElements2() {
  const [prodArray, setProdArray] = useState(initProds);

  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [inputValue3, setInputValue3] = useState("");

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
    let objectOfValues = {
      id: id(),
      name: inputValue1,
      catg: inputValue2,
      cost: inputValue3,
    };
    return (
      setProdArray([...prodArray, objectOfValues]),
      setInputValue1(""),
      setInputValue2(""),
      setInputValue3("")
    );
  }

  return (
    <div>
      <table>
        <tbody>{initProdsList}</tbody>
      </table>
      <input
        value={inputValue1}
        onChange={(event) => setInputValue1(event.target.value)}
      ></input>
      <input
        value={inputValue2}
        onChange={(event) => setInputValue2(event.target.value)}
      ></input>
      <input
        value={inputValue3}
        onChange={(event) => setInputValue3(event.target.value)}
      ></input>
      <button onClick={addElement}>save</button>
    </div>
  );
}
