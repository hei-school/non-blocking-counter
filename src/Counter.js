const Counter = ({ from, to }) => {
  const divideInto = 20000;
  let iteration = 0;
  const generateRows = (from, to) => {
    for (let i = from; i < to; i += 100) {
      const div = document.createElement("div");
      for (let t = i; t < to; t += 100) {
        div.appendChild(
          document.createTextNode((i)));
        iteration++;
        if (iteration < divideInto)
          setTimeout(generateRows, 0);
      };
    }
  }
  return (    
     generateRows(from, to)
   )
}
export default Counter;
