import { useEffect, useState } from "react";

const Counter = ({from, to}) => {
  let [consecutiveNumbers, setConsecutiveNumbers] = useState([]);
  let handleCount = ()=>{
    const allnumbers = to-from;
    const looping = allnumbers/100;
    let sequence = []
    let iterationCount = 0;
    setTimeout(function generateNumber(){
      const base = iterationCount*100;
      for (let i = from; i < from+100; i++){
        sequence.push(i+base)
      }
      iterationCount++;
      setConsecutiveNumbers([...sequence])
      if (iterationCount<looping) {
        setTimeout(generateNumber, 0)
      }
    }, 0)
  }
  useEffect(()=>{
    if (from>=100) {
      handleCount()
    }
    setConsecutiveNumbers([...Array(to-from).keys()].map(i => i + from))
  }, [])
  return <div>{consecutiveNumbers.map(n => <p key={n}>{n}</p>)}</div>;
}

export default Counter;
