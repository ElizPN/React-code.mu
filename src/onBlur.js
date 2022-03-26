import React, { useState } from "react";

export function OnBlur() {
  let [array, SetArray] = useState(["a", "b", "c", "d", "e"]);

  return <div>{array}</div>;
}
