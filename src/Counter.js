const Counter = ({ from, to }) => {
  const consecutiveNumbers = [...Array(to - from).keys()].map((i) => i + from);
  const divideInto = to / 100;
  const chunkSize = to / divideInto;
  let iteration = 0;
  return setTimeout(function generateRows() {
    
      <div>
        {consecutiveNumbers.map((n) => (
          for (let i = 0; i < chunkSize; i++) {
          <p key={n}>{n}</p>
        ))}}
        iteration++;
    if (iteration < divideInto) setTimeout(generateRows, 0);
  }, 0);
      </div>;
    
    
};

export default Counter;
