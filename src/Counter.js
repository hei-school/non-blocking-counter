import React, { useState, useEffect } from 'react';
const Counter = ({ from, to, batchSize = 100 }) => {
  const [currentFrom, setCurrentFrom] = useState(from);
  const [currentTo, setCurrentTo] = useState(from + batchSize);

  useEffect(() => {
    const timerId = setInterval(() => {
      if (currentTo >= to) {
        clearInterval(timerId);
      } else {
        setCurrentFrom(currentTo);
        setCurrentTo(Math.min(currentTo + batchSize, to));
      }
    }, 100);
    return () => clearInterval(timerId);
  }, [currentFrom, currentTo, to, batchSize]);
  const consecutiveNumbers = [...Array(currentTo - currentFrom).keys()].map(
    (i) => i + currentFrom
  );
  return (
    <div>
      {consecutiveNumbers.map((n) => (
        <p key={n}>{n.toLocaleString()}</p>
      ))}
    </div>
  );
};

export default Counter;
