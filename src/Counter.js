import React, { useState , useEffect } from 'react';

function Counter({ from, to }) {
  const [count, setCount] = useState(from);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(c => (c < to ? c + 100 : c));
    }, 0);
    return () => clearInterval(timer);
  }, [from, to]);

  return <span>{count < to ? count : to}</span>;
}

export default Counter;
