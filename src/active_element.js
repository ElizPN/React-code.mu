import React, { useState } from "react";

export function ActiveElemetn() {
  let [checked, setChecked] = useState(true);

  return (
    <div>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <p className={checked ? "active" : undefined}>uiuuiuiuiui</p>
    </div>
  );
}
