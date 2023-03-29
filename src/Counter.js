import { useState, useEffect } from 'react';

const Counter = ({ from, to }) => {
  const [maxPrinted, setMaxPrinted] = useState(from - 1);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextMax = Math.min(maxPrinted + 100, to);
      setMaxPrinted(nextMax);
    }, 0);

    return () => clearInterval(interval);
  }, [maxPrinted, to]);

  const consecutiveNumbers = [...Array(maxPrinted - from + 1).keys()].map((i) => i + from);

  return (
    <div>
      {consecutiveNumbers.map((n) => (
        <p key={n}>{n}</p>
      ))}
    </div>
  );
};

export default Counter;
