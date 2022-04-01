import React, { useState } from "react";

const initObj = {
  prop1: "value1",
  prop2: "value2",
  prop3: "value3",
};

export function BindingInputToObject() {
  const [obj, setObj] = useState(initObj);

  //   function handleChangeProperty(prop, event) {
  //     const copy = Object.assign({}, obj);
  //     copy[prop] = event.target.value;
  //     return setObj(copy);
  //   }

  function handleChangeProperty(prop, event) {
    setObj({ ...obj, ...{ [prop]: event.target.value } });
  }

  return (
    <div>
      <input
        value={obj.prop1}
        onChange={(event) => handleChangeProperty("prop1", event)}
      />
      <input
        value={obj.prop2}
        onChange={(event) => handleChangeProperty("prop2", event)}
      />
      <input
        value={obj.prop3}
        onChange={(event) => handleChangeProperty("prop3", event)}
      />{" "}
      <br />
      {obj.prop1}-{obj.prop2}-{obj.prop3}
    </div>
  );
}
