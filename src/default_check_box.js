import React, { useState } from "react";

export function DefaultCkeckBox() {
  let [checked, setChecked] = useState(true);

  return (
    <div>
      <input type="checkbox" defaultChecked={checked} />
    </div>
  );
}
