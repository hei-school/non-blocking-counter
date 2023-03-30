import { useEffect, useState } from 'react';

const Counter = ({ from, to }) => {
  const consecutiveNumbers = [...Array(to - from).keys()].map((i) => i + from);
  const [displayedNumbers, setDisplayedNumbers] = useState([]);

  useEffect(() => {
    let i = 0;
    const chunkedNumbers = chunk(consecutiveNumbers, 100);

    const displayNextChunk = () => {
      if (i >= chunkedNumbers.length) return;

      const currentChunk = chunkedNumbers[i];
      setDisplayedNumbers((prevNumbers) => [...prevNumbers, ...currentChunk]);
      i++;

      setTimeout(displayNextChunk, 0);
    };

    displayNextChunk();
  }, [consecutiveNumbers]);

  return (
    <div>
      {displayedNumbers.map((n) => (
        <p key={n}>{n}</p>
      ))}
    </div>
  );
};

const chunk = (arr, size) => {
  return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );
};

export default Counter;

