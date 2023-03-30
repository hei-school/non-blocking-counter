import { useState } from "react";

const Counter = ({from, to}) => {
  const [ maxPrinted, setMaxPrinted ] = useState(100);
  const consecutiveNumbers = [...Array(to-from).keys()].map(i => i + from);
  setTimeout(function divide(){
    for (let i = 0; i < maxPrinted; i++) {
      consecutiveNumbers;
    }
    if (maxPrinted < to-from) {
      setTimeout(divide(), 16);
    };
  }, 0);
  return <div>{consecutiveNumbers.map(n => <p key={n}>{n}</p>)}</div>;
}

export default Counter;
