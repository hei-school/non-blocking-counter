import React, { useState } from 'react';

const Counter = ({from, to}) => {
  const [maxPrinted, setMaxPrinted] = useState(from - 1);

  const consecutiveNumbers = [...Array(to-from).keys()]
    .map(i => i + from)
    .filter(n => n > maxPrinted)
    .slice(0, 100);

  if (consecutiveNumbers.length > 0) {
    setMaxPrinted(consecutiveNumbers[consecutiveNumbers.length - 1]);
  }

  return <div>{consecutiveNumbers.map(n => <p key={n}>{n}</p>)}</div>;
}

export default Counter;
