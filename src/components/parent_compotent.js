import React, { useState } from "react";
import { ChildProduct } from "./chiild_product";
import { ChildComponent } from "./child_component";
import { nanoid } from "nanoid";
import { UserData } from "./user_data";

function id() {
  return nanoid();
}

const user = [
  { id: id(), name: "Ron", surname: "Rogan", age: 30 },
  { id: id(), name: "Kenny", surname: "Kalvin", age: 31 },
  { id: id(), name: "Nicolas", surname: "Tiger", age: 33 },
];

export function ParentComponennt() {
  return (
    <table>
      <tbody>
        <UserData
          name={user[0].name}
          surname={user[0].surname}
          age={user[0].age}
        />
        <UserData
          name={user[1].name}
          surname={user[1].surname}
          age={user[1].age}
        />
        <UserData
          name={user[2].name}
          surname={user[2].surname}
          age={user[2].age}
        />
      </tbody>
    </table>
  );
}
