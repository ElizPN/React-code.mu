import React, { useState } from "react";
export function Question() {
  let [checked, setChecked] = useState(true);

  let message;
  if (checked) {
    message = (
      <div>
        <h2>Ура, вам уже есть 18</h2>
        <p className="active">здесь расположен контент только для взрослых</p>
      </div>
    );
  } else {
    message = <p>увы, вам еще нет 18 лет:(</p>;
  }

  return (
    <div>
      <input
        id="question"
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <label htmlFor="question">Вам уже есть 18?</label>
      <div>{message} </div>
    </div>
  );
}
