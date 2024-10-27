import React, { useEffect, useRef } from 'react';

export const Task4: React.FC = () => {
  const timerRef = useRef<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      timerRef.current += 1;
      console.log('Vrijeme (sekunde):', timerRef.current);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Tajmer radi u pozadini! (Pogledaj konzolu za vrijeme)</h1>
    </div>
  );
};