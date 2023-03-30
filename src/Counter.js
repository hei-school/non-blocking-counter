const Counter = ({from, to}) => {
  const consecutiveNumbers = [...Array(to-from).keys()].map(i => i + from);
  const maxPrinted = 100;
  for(let i=0; i<maxPrinted; i++) {
    return <div>{consecutiveNumbers.map(n => <p key={n}>{n}</p>)}</div>;
  }
}

export default Counter;
