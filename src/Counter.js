import { useState, useEffect } from 'react';
const Counter = ({from, to}) => {
  const [consecutiveNumbers, setConsecutiveNumbers] = useState([]);

  useEffect(() => {
    const displayNumbers = (from, to) => {
      const numbers = [...Array(to-from).keys()].map(i => i + from);
      setConsecutiveNumbers(numbers);
      if (to < to) {
        setTimeout(() => {
          displayNumbers(from + 100, to + 100);
        }, 0);
      }
    };
    displayNumbers(from, from + 100);
  }, [from, to]);

  return <div>{consecutiveNumbers.map(n => <p key={n}>{n}</p>)}</div>;
}
export default Counter;
