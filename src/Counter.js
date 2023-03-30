const Counter = ({from, to}) => {

///Generating data for the table
const divideInto = 100;                                       
const chunkSize = to/divideInto;  
let consecutiveNumbers = [...Array(to-from).keys()].map(i => i + from);
let iteration = 0;  

setTimeout(function generateRows(){
  for(from ; from <= to+100; to++ ){
   consecutiveNumbers = [...Array(chunkSize).keys()].map(i => i + from);
  }
  iteration++;
  if (iteration < divideInto)
    setTimeout(generateRows, 0);
},0);

  return <div>{consecutiveNumbers.map(n => <p key={n}>{n}</p>)}</div>;
}

export default Counter;
