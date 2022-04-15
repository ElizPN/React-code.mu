import React, { useState } from "react";

export function Employee({ name, surname, position, salary }) {
  return (
    <p>
      <span>{name}</span>
      <span>{surname}</span>
      <span>{position}</span>
      <span>{salary}</span>
    </p>
  );
}
