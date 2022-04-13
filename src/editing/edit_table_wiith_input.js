import React, { useState } from "react";
import { nanoid } from "nanoid";
import { Input } from "../input_value";

function id() {
  return nanoid();
}

const initNotes = [
  {
    id: id(),
    fields: [
      { name: "prop1", value: "value11", isEdit: false },
      { name: "prop2", value: "value12", isEdit: false },
      { name: "prop3", value: "value13", isEdit: false },
    ],
  },
  {
    id: id(),
    fields: [
      { name: "prop1", value: "value21", isEdit: false },
      { name: "prop2", value: "value22", isEdit: false },
      { name: "prop3", value: "value23", isEdit: false },
    ],
  },
  {
    id: id(),
    fields: [
      { name: "prop1", value: "value31", isEdit: false },
      { name: "prop2", value: "value32", isEdit: false },
      { name: "prop3", value: "value33", isEdit: false },
    ],
  },
];

export function EditTableWithInput() {
  const [notesArray, setNotesArray] = useState(initNotes);

  const rows = notesArray.map((elem) => {
    const cells = elem.fields.map((field) => {
      let item;
      if (!field.isEdit) {
        item = (
          <span onClick={() => swichMode(elem.id, field.name)}>
            {field.value}
          </span>
        );
      } else {
        item = (
          <input
            value={field.value}
            onBlur={() => swichMode(elem.id, field.name)}
            onChange={(event) => swichMode(elem.id, field.name, event)}
          />
        );
      }

      return <td key={field.name}>{item}</td>;
    });
    return <tr key={elem.id}>{cells}</tr>;
  });

  function swichMode(id, name, event) {
    const newNotesArray = notesArray.map((elem) => {
      if (elem.id === id) {
        const newFields = elem.fields.map((field) => {
          if (field.name === name) {
            return {
              ...field,
              isEdit: event ? true : !field.isEdit, // event is send only when field.isEdit = true
              value: event ? event.target.value : field.value,
            };
          } else {
            return field;
          }
        });
        return {
          id,
          fields: newFields,
        };
      } else {
        return elem;
      }
    });
    setNotesArray(newNotesArray);
  }

  return (
    <div>
      <table>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}
