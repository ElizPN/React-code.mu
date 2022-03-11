import React, { useState } from "react";

export function User() {
  let [name, setName] = useState("Name");
  let [surname, setSurname] = useState("Surname");
  let [age, setAge] = useState(18);
  let [banState, setStatus] = useState(true);

  return (
    <div>
      <p>{name}</p>
      <p>{surname}</p>
      <p>{age}</p>
      <p>{banState ? "Your profile is banned" : "Your profile is unbanned"}</p>
      <button
        onClick={() => {
          setName("Liza");
        }}
      >
        Change name
      </button>
      <button
        onClick={() => {
          setSurname("Romanova");
        }}
      >
        Change surname
      </button>
      <button
        className={!banState && "hidden"}
        onClick={() => {
          setStatus(false);
        }}
      >
        To unbanned user's profile
      </button>
      <button
        className={banState && "hidden"}
        onClick={() => {
          setStatus(true);
        }}
      >
        To banned user's profile
      </button>
      <button
        onClick={() => {
          setAge(age + 1);
        }}
      >
        Older then 18
      </button>
      <button
        onClick={() => {
          setAge(age - 1);
        }}
      >
        Younger then 18
      </button>
    </div>
  );
}
