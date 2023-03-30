import React, { useState, useEffect } from 'react';

const Counter = ({ from, to }) => {
  const [maxPrinted, setMaxPrinted] = useState(from - 1);

  useEffect(() => {
    if (maxPrinted < to) {
      const timeoutId = setTimeout(() => {
        setMaxPrinted(Math.min(maxPrinted + 100, to));
      }, 100); // Delay of 100 milliseconds before showing the next batch
      return () => clearTimeout(timeoutId);
    }
  }, [maxPrinted, to]);

  const numbers = [];
  for (let i = from; i <= maxPrinted; i++) {
    numbers.push(i);
  }

  return (
      <div>
        {numbers.map(n => <p key={n}>{n}</p>)}
      </div>
  );
};

export default Counter;