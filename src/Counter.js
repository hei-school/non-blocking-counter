import { useEffect } from "react";

const Counter = ({from, to}) => {
  useEffect(()=> {
    setInterval(()=>{
      const consecutiveNumbers = [...Array(to-from).keys()].map(i => i + from);
      return <div>{consecutiveNumbers.map(n => <p key={n}>{n}</p>)}</div>;
    }, 100);
  }, []);
}

export default Counter;
