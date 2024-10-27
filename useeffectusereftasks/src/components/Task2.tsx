import React, { useEffect, useState } from 'react';

export const Task2: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  useEffect(() => {
    console.log('Komponenta je prvi put renderisana');
  }, []);
  useEffect(() => {
    console.log('Vrijednost count stanja:', count);
  }, [count]);

  return (
    <div>
      <h1>Vrijednost: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Povećaj</button>
    </div>
  );
};
