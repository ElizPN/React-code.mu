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
    let descrip;
    let comment;

    if (elem.showDesc) {
      descrip = elem.desc;
    }

    if (elem.showComm) {
      comment = elem.comm;
    }

    function showDescription(id) {
      const arrayWithDescrip = prodsArray.map((elem) => {
        if (elem.id === id) {
          return { ...elem, showDesc: !elem.showDesc };
        } else {
          return elem;
        }
      });
      setProdsArray(arrayWithDescrip);
    }

    function showComment(id) {
      const arrayWithComment = prodsArray.map((elem) => {
        if (elem.id === id) {
          return { ...elem, showComm: !elem.showComm };
        } else {
          return elem;
        }
      });
      setProdsArray(arrayWithComment);
    }

    return (
      <li key={elem.id}>
        {elem.name}, {elem.cost}, {descrip},{comment}
        <button onClick={() => showDescription(elem.id)}>
          Show description
        </button>
        <button
          onClick={() => {
            showComment(elem.id);
          }}
        >
          Show comment
        </button>
      </li>
    );
  });

  return <ul>{prodsArraylist}</ul>;
}
