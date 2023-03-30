import { useState, useEffect } from 'react';

const Counter = ({ from, to }) => {
  const [batch, setBatch] = useState(1);
  const consecutiveNumbers = [...Array(to - from).keys()].map((i) => i + from);
  useEffect(() => {
    const interval = setInterval(() => {
      setBatch((prevBatch) => prevBatch + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  
  const start = (batch - 1) * 100;
  const end = batch * 100;

  return (
    <div>
      {consecutiveNumbers.slice(start, end).map((n) => (
        <p key={n}>{n}</p>
      ))}
    </div>
  );
};

export default Counter;