import { useEffect, useState } from "react";

const createArray = (length, firstValue) => [...Array(length).keys()].map(i => i + firstValue);

const Counter = ({from, to}) => {
  const [maxPrinted, setMaxPrinted] = useState(createArray(to - from < 100 ? to - from : 100, from));
  useEffect(()=> {
    const updateMaxPrinted = () => {
      const lastPrinted = maxPrinted[maxPrinted.length - 1];
      if(lastPrinted < to - 1){
        setTimeout(() => {
          console.log(createArray(to - lastPrinted < 100 ? to - lastPrinted : 100, lastPrinted));
          setMaxPrinted(e => ([...e, ...createArray(to - lastPrinted < 100 ? to - lastPrinted : 100, lastPrinted)]));
        if(lastPrinted < to - 1){
          updateMaxPrinted();
        }
      }, 0);
      }
    }
    updateMaxPrinted();
  }, [])
  return <div>{maxPrinted.map(n => <p key={n+"key"}>{n}</p>)}</div>;
}

export default Counter;
