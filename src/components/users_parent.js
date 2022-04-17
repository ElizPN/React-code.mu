import React, { useState } from "react";
import { nanoid } from "nanoid";
import { UserChild } from "./user_child";

function id() {
  return nanoid();
}

const initUsers = [
  { id: id(), name: "user1", surname: "surn1", age: 30, ban: false },
  { id: id(), name: "user2", surname: "surn2", age: 31, ban: false },
  { id: id(), name: "user3", surname: "surn3", age: 32, ban: false },
];

export function UsersParent() {
  const [usersArray, setUsersArray] = useState(initUsers);

  const usersArrayResult = usersArray.map((user) => {
    return (
      <UserChild
        key={user.id}
        id={user.id}
        name={user.name}
        surname={user.surname}
        age={user.age}
        ban={user.ban}
        userBan={userBan}
      />
    );
  });

  function userBan(id) {
    const newUsersArray = usersArray.map((user) => {
      if (user.id === id) {
        user.ban = true;
      }
      return user;
    });
    setUsersArray(newUsersArray);
  }

  return <div>{usersArrayResult}</div>;
}
