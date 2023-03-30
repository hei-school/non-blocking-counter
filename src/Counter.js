import { useState } from 'react';

const BatchCounter = ({ batch }) => (
  <div>
    {batch.map(n => <p key={n}>{n}</p>)}
  </div>
);
const Counter = ({ from, to }) => {
  const [maxPrinted, setMaxPrinted] = useState([]);
  const consecutiveNumbers = [...Array(to-from).keys()].map(i => i + from);
  for (let i = 0; i < consecutiveNumbers.length; i += 100) {
    const batch = consecutiveNumbers.slice(i, i + 100);
    setMaxPrinted(batches => [...batches, batch]);
  }
  return (
    <div>
      {maxPrinted.map(batch => <BatchCounter batch={batch} key={batch[0]} />)}
    </div>);};
export default Counter;
