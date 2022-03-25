import React, { useState } from "react";

export function AddValueToArray() {
  let [notes, setNotes] = useState([4, 3, 2, 5, 6, 4, 3]);

  return <div>{notes}</div>;
}
