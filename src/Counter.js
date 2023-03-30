import { useEffect, useState } from "react";

const Counter = ({from, to}) => {
  const [tempFrom, setTempFrom] = useState(from);
  const [tempTo, setTempTo] = useState(from + 99);
  let consecutiveNumbers;
  useEffect(() => {
    if(tempTo < to){
      const timer = setTimeout(() => {
        setTempFrom(tempTo+1);
        setTempTo(tempFrom + 99);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [tempTo, to]);
  consecutiveNumbers = [...Array(tempFrom-tempTo).keys()].map(i => i + tempFrom);
  return <div>{consecutiveNumbers.map(n => <p key={n}>{n}</p>)}</div>;
}

export default Counter;
