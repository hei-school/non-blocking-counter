const Counter = ({from, to}) => {
  const batchSize = 100;
  const consecutiveNumbers = [];

  for(let i = from; i<= to; i +=batchSize){
    const batchEnd = Math.min(i + batchSize -1, to);
    const batchNumbers =  [...Array(batchEnd - i + 1).keys()].map(j => j + i);
    consecutiveNumbers.push(...batchNumbers);
  }
  return <div>{consecutiveNumbers.map(n => <p key={n}>{n}</p>)}</div>;
}

export default Counter;
