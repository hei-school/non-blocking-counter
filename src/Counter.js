import useState from 'react'
const Counter = ({from, to}) => {
  const consecutiveNumbers = [...Array(to-from).keys()].map(i => i + from);
  let index = 0;
  let maxPrinted = 100;
  const [tobeMapped,setTobeMapped]=useState();
  const rebuildRender = (index,maxPrinted) => {
    if(maxPrinted >=consecutiveNumbers.length){
      setTobeMapped(...tobeMapped,consecutiveNumbers.slice(index,(consecutiveNumbers.length-1)));
      return ;
    }
    setTimeout(()=>{
      const hmm = consecutiveNumbers.slice(index,maxPrinted);
      index=maxPrinted;
      maxPrinted+=100
      setTobeMapped(...tobeMapped,hmm.map(n => <p key={n}>{n}</p>));
      rebuildRender(index,maxPrinted);
    },0)
  }
  rebuildRender(index,maxPrinted);
  return <div>{tobeMapped.map(n => <p key={n}>{n}</p>)}</div>;
}
console.log(Counter({from:1,to:200}));
// export default Counter;
