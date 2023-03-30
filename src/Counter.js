import React, { useState, useEffect } from 'react';

const Counter = ({from, to}) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 10);

    return () => clearInterval(interval);
  }, []);

  const numbers = [];

  for (let i = from; i < to; i += 100) {
    numbers.push(
      <div key={i}>
        {Array.from({ length: Math.min(100, to - i) }, (_, index) => (
          <div key={i + index}>{i + index}</div>
        ))}
      </div>
    );
  }

  return <div>{numbers}</div>;
};

export default Counter;
