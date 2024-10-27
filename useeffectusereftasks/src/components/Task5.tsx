import React, { useRef } from 'react';

export const Task5: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleButtonClick = () => {
    inputRef.current?.focus();
  };
  return (
    <div>
      <input type="text" ref={inputRef} placeholder="Unesite tekst ovdje" />
      <button onClick={handleButtonClick}>Postavi fokus na input</button>
    </div>
  );
};
