const Counter = ({ from, to }) => {
  const [maxPrinted, setMaxPrinted] = React.useState(from);
  const consecutiveNumbers = [];
  
  for (let i = maxPrinted; i < to && i < maxPrinted + 100; i++) {
  consecutiveNumbers.push(i);
  }
  
  React.useEffect(() => {
  if (maxPrinted < to) {
  const timeoutId = setTimeout(() => {
  setMaxPrinted(maxPrinted + 100);
  }, 0);
  return () => clearTimeout(timeoutId);
  }
  }, [maxPrinted, to]);
  
  return (
  <div>
  {consecutiveNumbers.map((n) => (
  <p key={n}>{n}</p>
  ))}
  </div>
  );
  };
  
  export default Counter;