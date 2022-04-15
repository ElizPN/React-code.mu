import React, { useState } from "react";

export function ChildComponent({ name, surname }) {
  return (
    <div>
      <p>{name}</p>
      <p>{surname}</p>
    </div>
  );
}
