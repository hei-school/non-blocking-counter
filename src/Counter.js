import {useEffect, useState} from "react";

const Counter = ({from, to}) => {
  const batchSize = 100;
  const [consecutiveNumbers, setConsecutiveNumbers] = useState([...Array(batchSize).keys()].map(i => i + from));
  const [maxPrinted, setMaxPrinted] = useState(from + batchSize);

  useEffect(() => {
    const interval = setInterval(() => {
      if (maxPrinted >= to) {
        clearInterval(interval);
      } else {
        const nextBatch = [...Array(batchSize).keys()].map(i => i + maxPrinted);
        setConsecutiveNumbers([...consecutiveNumbers, ...nextBatch]);
        setMaxPrinted(maxPrinted + batchSize);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [consecutiveNumbers, maxPrinted, to]);

  return <div>{consecutiveNumbers.map(n => <p key={n}>{n}</p>)}</div>;
}

export default Counter;
