import React, { useState } from "react";

export function ChangeObject() {
  const [obj, setObj] = useState({
    prop1: "value1",
    prop2: "value2",
    prop3: "value3",
  });

  function chancgeProp1() {
    const copy = Object.assign({}, obj);
    copy.prop1 = "kkkkk";
    return setObj(copy);
  }

  function chancgeProp2() {
    const copy = Object.assign({}, obj);
    copy.prop2 = "lololo";
    return setObj(copy);
  }

  function chancgeProp3() {
    const copy = Object.assign({}, obj);
    copy.prop3 = "tuctuctuc";
    return setObj(copy);
  }

  return (
    <div>
      <span>{obj.prop1}</span>
      <button onClick={chancgeProp1}>Edit Prop1</button>
      <span>{obj.prop2}</span>
      <button onClick={chancgeProp2}>Edit Prop1</button>
      <span>{obj.prop3}</span>
      <button onClick={chancgeProp3}>Edit Prop1</button>
    </div>
  );
}
