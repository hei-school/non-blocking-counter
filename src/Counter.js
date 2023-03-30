import React, { useState } from 'react';

const Counter = ({ from, to }) => {
  const [maxPrinted, setMaxPrinted] = useState(from - 1);
  const items = [];
  for (let i = from + 1; i <= Math.min(to, maxPrinted + 100); i++) {
    items.push(<div key={i}>{i}</div>);
  }
  const handleClick = () => {
    setMaxPrinted(Math.min(maxPrinted + 100, to));
  };
  return (
      <div>
        <button onClick={handleClick}>Show more</button>
        {items}
      </div>
  );
};

export default Counter;