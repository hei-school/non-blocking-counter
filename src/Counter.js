import { useState, useEffect } from "react";

const Counter = ({from, to}) => {
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    const batchSize = 100;
    const numberOfBatches = Math.ceil((to - from) / batchSize);
    let currentBatch = 0;
    const intervalId = setInterval(() => {
      const start = from + currentBatch * batchSize;
      const end = Math.min(to, start + batchSize);
      const batchNumbers = [...Array(end - start).keys()].map((i) => i + start);
      setNumbers((prevNumbers) => [...prevNumbers, ...batchNumbers]);
      currentBatch++;
      if (currentBatch === numberOfBatches) {
        clearInterval(intervalId);
      }
    }, 100);
    return () => clearInterval(intervalId);
  }, [from, to]);

  return <div>{numbers.map(n => <p key={n}>{n}</p>)}</div>;
}

export default Counter;
