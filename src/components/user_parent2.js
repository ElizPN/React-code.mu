import React, { useState } from "react";
import { nanoid } from "nanoid";
import { UserChild2 } from "./user_child2";

function id() {
  return nanoid();
}

const initUsers = [
  { id: id(), name: "user1", surname: "surn1", age: 30, isEdit: false },
  { id: id(), name: "user2", surname: "surn2", age: 31, isEdit: false },
  { id: id(), name: "user3", surname: "surn3", age: 32, isEdit: false },
];

export function UsersParent2() {
  const [usersArray, setUsersArray] = useState(initUsers);

  const usersArrayResult = usersArray.map((user) => {
    return (
      <UserChild2
        key={user.id}
        id={user.id}
        name={user.name}
        surname={user.surname}
        age={user.age}
        isEdit={user.isEdit}
        toggleMode={toggleMode}
        editUser={editUser}
      />
    );
  });
  // toggle mode when we put on the button (in child componenet); set new state for array
  function toggleMode(id) {
    const newUsersArray = usersArray.map((user) => {
      if (user.id === id) {
        user.isEdit = !user.isEdit;
      }
      return user;
    });
    setUsersArray(newUsersArray);
  }

  // since we have input - this function change value of input and set new state for array with new value
  function editUser(id, field, event) {
    const newUsersArray = usersArray.map((user) => {
      if (user.id === id) {
        user[field] = event.target.value; // name, surname and age
      }
      return user;
    });
    setUsersArray(newUsersArray);
  }

  return <div>{usersArrayResult}</div>;
}
