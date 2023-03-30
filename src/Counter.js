import { useState, useEffect } from 'react';

const Counter = ({from, to}) => {
  const [numbers, setNumbers] = useState([]);
  useEffect(() => {
    let current = from;
    const interval = setInterval(() => {
      if (current >= to) {
        clearInterval(interval);
        return;
      }
      const end = Math.min(current + 100, to);
      setNumbers(prevNumbers => [...prevNumbers, ...[...Array(end - current).keys()].map(i => i + current)]);
      current = end;
    }, 10);
    return () => clearInterval(interval);
  }, [from, to]);
  return <div>{numbers.map(n => <p key={n}>{n}</p>)}</div>;
};

export default Counter;