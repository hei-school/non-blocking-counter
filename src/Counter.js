const Counter = ({from, to}) => {
const consecutiveNumbers = [...Array(to - from + 1).keys()].map(i => i + from);

const delayedRender = () => {
  let i = 0;
  const interval = setInterval(() => {
    if (i < consecutiveNumbers.length) {
      const n = consecutiveNumbers[i];
      const p = <p key={n}>{n}</p>;
      console.log(n);
      i++;
      ReactDOM.render(p, document.getElementById('root'));
    } else {
      clearInterval(interval);
    }
  }, 500);
};
  setTimeout(delayedRender, 1000);
}

export default Counter;
