import React, { useState } from "react";
import { ChildComponent } from "./child_component";

export function ParentComponennt() {
  const name1 = "Jhon";
  const surname1 = "Nocolsan";

  const name2 = "Billi";
  const surname2 = "Rogan";

  return (
    <div>
      <ChildComponent name={name1} surname={surname1} />
      <ChildComponent name={name2} surname={surname2} />
    </div>
  );
}
