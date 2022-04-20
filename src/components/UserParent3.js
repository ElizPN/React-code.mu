import React, { useState } from "react";
import { nanoid } from "nanoid";
import { UserChild3 } from "./UserChild3";

function id() {
  return nanoid();
}

const initUsers = [
  { id: id(), name: "user1", surname: "surn1", age: 30 },
  { id: id(), name: "user2", surname: "surn2", age: 31 },
  { id: id(), name: "user3", surname: "surn3", age: 32 },
];

export function UserParent3() {
  const [usersArray, setUsersArray] = useState(initUsers);

  const rows = usersArray.map((user) => {
    return (
      <UserChild3
        key={user.id}
        id={user.id}
        name={user.name}
        surname={user.surname}
        age={user.age}
        changeField={changeField}
      />
    );
  });
  function changeField(id, field, event) {
    const newUsersArray = usersArray.map((user) => {
      if (user.id === id) {
        console.log(user[field]);

        user[field] = event.target.value;
      }
      return user;
    });
    setUsersArray(newUsersArray);
  }

  return (
    <table>
      <tbody>{rows}</tbody>
    </table>
  );
}
