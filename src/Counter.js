import { useState, useEffect } from 'react';

const Counter = ({ from, to }) => {
  const [currentBatch, setCurrentBatch] = useState([]);

  useEffect(() => {
    let current = from;
    let batch = [];

    const interval = setInterval(() => {
      batch = [...batch, current];
      current++;

      if (batch.length === 100 || current > to) {
        setCurrentBatch(batch);
        batch = [];
      }

      if (current === to) {
        clearInterval(interval);
      }
    }, 10);

    return () => clearInterval(interval);
  }, [from, to]);

  return (
    <div>
      {currentBatch.map((n) => (
        <p key={n}>{n}</p>
      ))}
    </div>
  );
};

export default Counter;
