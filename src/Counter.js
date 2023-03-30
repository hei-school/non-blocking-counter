import { useState, useEffect } from 'react';
const Counter = ({from, to}) => {
  const [consecutiveNumbers, setNumbers] = useState([]);
  useEffect(() => {
    const size = 100;
    const getNextBatch = async (start, end) => {
      const batchNumbers = [...Array(end - start).keys()].map((i) => i + start);
      setNumbers((prevNumbers) => [...prevNumbers, ...batchNumbers]);
      if (end < to) {
        await new Promise((resolve) => setTimeout(resolve, 0));
        await getNextBatch(end, Math.min(end + size, to));
      }
    };
    getNextBatch(from, Math.min(from + size, to));
  }, [from, to]);
  return <div>{consecutiveNumbers.map(n => <p key={n}>{n}</p>)}</div>;
}

export default Counter;
