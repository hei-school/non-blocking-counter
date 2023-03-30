const Counter = ({ from, to }) => {
  const [maxPrinted, setMaxPrinted] = useState(from);
  
  const consecutiveNumbers = [...Array(to - maxPrinted).keys()].map(i => i + maxPrinted);
  const newNumbers = consecutiveNumbers.slice(1);
  if (newNumbers.length > 0) {
  setMaxPrinted(to);
  }
  return (
  <div>
  {consecutiveNumbers.map(n => <p key={n}>{n}</p>)}
  </div>);
  };

export default Counter;
