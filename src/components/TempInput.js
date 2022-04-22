import React, { useState } from "react";

export function TempInput({ temp, changeTemp }) {
  return <input value={temp} onChange={(event) => changeTemp(event)} />;
}
