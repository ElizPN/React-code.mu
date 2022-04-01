import React, { useState } from "react";

const initDate = {
  year: 2025,
  month: 12,
  day: 31,
};

export function BindingInputsToObject2() {
  const [obj, setObj] = useState(initDate);

  return (
    <div>
      <p>{obj.year}</p>
      <p>{obj.month}</p>
      <p>{obj.day}</p>
    </div>
  );
}
