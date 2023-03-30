import { useState, useEffect } from "react";
const Counter = ({from, to}) => {
  const [consecutiveNumbers, setConsecutiveNumbers] = useState([]);
  const [maxPrinted, setMaxPrinted] = useState(from - 1);

  useEffect(() => {
    let cancelled = false;

    const updateConsecutiveNumbers = () => {
      const newMaxPrinted = Math.min(maxPrinted + 100, to);
      const newConsecutiveNumbers = [...Array(newMaxPrinted - from + 1).keys()].map(i => i + from);
      if (!cancelled) {
        setConsecutiveNumbers(prev => [...prev, ...newConsecutiveNumbers.slice(prev.length)]);
        setMaxPrinted(newMaxPrinted);
      }
      if (newMaxPrinted < to) {
        requestAnimationFrame(updateConsecutiveNumbers);
      }
    };

    requestAnimationFrame(updateConsecutiveNumbers);

    return () => {
      cancelled = true;
    };
  }, [from, to]);
  
  return <div>{consecutiveNumbers.map(n => <p key={n}>{n}</p>)}</div>;
}

export default Counter;
