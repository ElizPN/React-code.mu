import React, { useState } from "react";

const initObj = {
  prop1: "value1",
  prop2: "value2",
  prop3: "value3",
};

export function BindingInputToObject() {
  const [obj, setObj] = useState(initObj);

  return (
    <div>
      <input value={obj.prop1} />
      <input value={obj.prop2} />
      <input value={obj.prop3} /> <br />
      {obj.prop1}-{obj.prop2}-{obj.prop3}
    </div>
  );
}
