import { useState, useEffect } from "react";

const Counter = ({from, to}) => {
  const [maxPrinted, setmaxPrinted] = useState([])
  const [actualFrom, setActualFrom] = useState(from)
  const [actualTo, setActualTO] = useState(from+100<to?from+100:to)
  const fn = (fromN, toN) => {
    const consecutivemaxPrinteds = [...Array(toN-fromN).keys()].map(i => i + fromN)
    setmaxPrinted([...maxPrinted,...consecutivemaxPrinteds])
    if(actualTo<to) {
      setTimeout(function(){
        setActualFrom(actualTo)
        setActualTO(actualTo+100<to?farany+100:to)
      },0)
    }
  }

  useEffect(() => {
    fn(actualFrom,actualTo)
  }, [actualFrom])
  return <div>{maxPrinted.map(n => <p key={n}>{n}</p>)}</div>;
}

export default Counter;
