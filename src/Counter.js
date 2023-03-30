const Counter = ({from, to}) => {
  const batchSize = 100;
  const batches = Math.ceil((to - from + 1) / batchSize);
  const consecutiveNumbers = [...Array(batches)].map((_, i) => {
    const batchStart = from + i * batchSize;
    const batchEnd = Math.min(batchStart + batchSize - 1, to);
    return [...Array(batchEnd - batchStart + 1)].map((_, j) => batchStart + j);
  }).flat();
  
  return (
    <div>{consecutiveNumbers.map(n => <p key={n}>{n}</p>)}</div>
  );
}

export default Counter;








