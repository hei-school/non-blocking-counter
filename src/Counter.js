import { useState } from "react";
import React from "react";

const Counter = ({ from, to }) => {

  const [maxPrinted, setMaxPrinted] = useState([]);

  const [start, setStart] = useState(from)
  const [end, setEnd] = useState(start + 10);

  const printInterval = (start, end) => {
    const tab = new Array();
    for (let i = start; i < end; i++) {
      tab.push(i);
    }
    setMaxPrinted(tab);
  }


  const count = setInterval(() => {
    if (end < to) {
      printInterval(start, end);
      setStart(end);
      setEnd(start + 10);
    } else {
      clearInterval(count);
    }
  }, 2000);

  return (
    <div>
      {maxPrinted.map(n => <p key={n}>{n}</p>)}
    </div>
  );
}

export default React.memo(Counter);
