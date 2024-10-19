import React, { useState, useEffect } from "react";
import './App.css';

/*Napravite komponentu koja koristi useState za kontrolu checkbox-a.
Koristite useState za pohranu boolean vrijednosti (true/false).
Dodajte checkbox i povežite njegov checked atribut s useState.
Prikazujte poruku koja se mijenja ovisno o stanju checkbox-a.
Primjer za checkbox:
<input
type="checkbox"
checked={value}
onChange={}
/>*/

export const App: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  const CheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <h1>Kontrola Checkbox-a</h1>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={CheckboxChange}
      />
      <label>
        {isChecked ? 'Checkbox je označen' : 'Checkbox nije označen'}
      </label>
    </div>
  );
};
