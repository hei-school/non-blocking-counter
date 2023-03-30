import React, { useState, useEffect } from 'react';

const Counter = ({ from, to }) => {
  const [numbers, setNumbers] = useState([]);
  const [maxPrinted, setMaxPrinted] = useState(from - 1);

  useEffect(() => {
    const newNumbers = [];
    for (let i = maxPrinted + 1; i <= to; i++) {
      newNumbers.push(i);
      if (newNumbers.length >= 100) {
        setNumbers((prevNumbers) => [...prevNumbers, ...newNumbers]);
        setMaxPrinted(i);
        newNumbers.length = 0;
        break;
      }
    }
    if (newNumbers.length > 0) {
      setNumbers((prevNumbers) => [...prevNumbers, ...newNumbers]);
      setMaxPrinted(to);
    }
  }, [maxPrinted, to]);

  return (
    <div>
      {numbers.map((number) => (
        <div key={number}>{number}</div>
      ))}
    </div>
  );
};

export default Counter;
