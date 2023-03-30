const Counter = ({ from, to }) => {
  const batchSize = 100;
  let numbers = [];
  for (let i = from; i < to; i += batchSize) {
    const batchEnd = Math.min(i + batchSize, to);
    for (let j = i; j < batchEnd; j++) {
      numbers.push(<p key={j}>{j}</p>);
    }
  }
  return <div>{numbers}</div>;
};

export default Counter;
