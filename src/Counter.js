import { useState, useEffect } from "react";

const Counter = ({ from, to }) => {
  const [maxPrinted, setMaxPrinted] = useState(from - 1); // max number printed so far
  const [numbers, setNumbers] = useState([]); // array of numbers to display

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newMax = maxPrinted + 100;
      if (newMax <= to) {
        setMaxPrinted(newMax);
        setNumbers((prevNumbers) => [
          ...prevNumbers,
          ...[...Array(100).keys()].map((i) => i + newMax - 100),
        ]);
      }
    }, 0);
    return () => clearInterval(intervalId);
  }, [maxPrinted, to]);

  return (
    <div>
      {numbers.map((n) => (
        <p key={n}>{n}</p>
      ))}
    </div>
  );
};

export default Counter;
