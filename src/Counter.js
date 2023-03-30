import { useState, useEffect } from "react";

const Counter = ({from, to}) => {
  const consecutiveNumbers = [...Array(to-from).keys()].map(i => i + from);
  const [displayedNumbers, setDisplayedNumbers] = useState([]);

  useEffect(() => {
    const timeoutIds = consecutiveNumbers.map((number, index) =>
      setTimeout(() => {
        setDisplayedNumbers((prevNumbers) => [...prevNumbers, number]);
      }, (index + 1) * 100)
    );

    return () => {
      timeoutIds.forEach((timeoutId) => clearTimeout(timeoutId));
    };
  }, []);

  return (
    <div>
      {displayedNumbers.map((number) => (
        <p key={number}>{number}</p>
      ))}
    </div>
  );
};

export default Counter;
