import { nanoid } from "nanoid";

export function Table() {
  const users = [
    { id: nanoid(), name: "user1", surn: "surn1", age: 30 },
    { id: nanoid(), name: "user2", surn: "surn2", age: 31 },
    { id: nanoid(), name: "user3", surn: "surn3", age: 32 },
  ];
  const row = users.map(function (elem) {
    return (
      <tr key={elem.id}>
        <td>{elem.id}</td>
        <td>{elem.name}</td>
        <td>{elem.surn}</td>
        <td>{elem.age}</td>
      </tr>
    );
  });

  return (
    <table>
      <tbody>{row}</tbody>
    </table>
  );
}
