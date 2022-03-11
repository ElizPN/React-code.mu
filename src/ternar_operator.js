import React, { useState } from "react";

export function InCart() {
  let [inCart, setStatus] = useState(false);

  return (
    <div>
      <span>{inCart ? "In the Cart" : "Not in the Cart"}</span>
      <button
        onClick={() => {
          setStatus(!inCart);
        }}
      >
        BTN
      </button>
      ;
    </div>
  );
}
