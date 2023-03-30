import { useEffect } from "react";

const Counter = ({ from, to }) => {
  const consecutiveNumbers = [...Array(to - from).keys()].map((i) => i + from);
  const eachPart = 100;
  const firstPart = consecutiveNumbers.slice(start, start + eachPart);
  const divide = consecutiveNumbers.length / eachPart;
  const newConsecutiveNumbers = [];
  useEffect(() => {
    for (let j = 0; j < divide; j++) {
      for (let i = 0; i < firstPart.length; i++) {
        newConsecutiveNumbers.push(firstPart[i]);
      }
    }
  }, newConsecutiveNumbers);
  return (
    <div>
      {newConsecutiveNumbers.map((n) => (
        <p key={n}>{n}</p>
      ))}
    </div>
  );
};

export default Counter;
