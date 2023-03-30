import React, {useState, useEffect} from 'react';
const Counter = ({ from, to }) => {
  const batchSize = 100, [current, setCurrent] = useState(from - 1);
  useEffect(() => {
    if (current < to) setTimeout(() => setCurrent(current + batchSize), 0)},
      [current]);
  return <div>{Array(batchSize).fill().map((_, i) => current + i + 1 <= to && <p key={current + i + 1}>{current + i + 1}</p>)}</div>;
};
export default Counter;
