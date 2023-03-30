const Counter = ({from, to}) => {
  const MAX_NUMBERS = 1000;
  const totalNumbers = to - from;
  const numChunks = Math.ceil(totalNumbers / MAX_NUMBERS);
  const chunks = Array.from({ length: numChunks }, (_, i) => ({
    start: from + i * MAX_NUMBERS,
    end: Math.min(from + (i + 1) * MAX_NUMBERS, to),
  }));
  
  const chunkElements = chunks.map((chunk, index) => {
    const { start, end } = chunk;
    const consecutiveNumbers = Array(end - start).fill().map((_, i) => start + i);
    return (
      <div key={index}>
        {consecutiveNumbers.map(n => <p key={n}>{n}</p>)}
      </div>
    );
  });

  return <div>{chunkElements}</div>;
};

export default Counter;
