import React, { useState, useEffect } from "react";
import './App.css';

/*Napravite komponentu koja koristi useState za upravljanje stanjem s više
gumba.
Kreirajte gumbove za promjenu count na različite vrijednosti (npr. +1, -1).
Prikazujte trenutnu vrijednost count u paragraphu.*/

export const App: React.FC = () => {
  const [count, setCount] = useState(0);



  return (
    <div>
      <p>Trenutna vrijednost {count}</p>
      <button onClick={() => setCount(count + 1)}>Povećaj</button>
      <button onClick={() => setCount(count - 1)}>Umanji</button>
    </div>
  );
};
