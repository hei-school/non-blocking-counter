const Counter = ({ from, to }) => {
  const consecutiveNumbers = [...Array(to - from).keys()].map((i) => i + from);
  const rowCount = to - from;
  const divideInto = rowCount % 100;
  const first = 0;
  const last = 100;
  const chunkSize = rowCount / divideInto;
  let Iteration = 0;

  return (
    <div>
      {setTimeout(function generateElement() {
        consecutiveNumbers.map((n, i) => {
          if (i < last && i >= first) {
            <p key={n}>{n}</p>;
          }
        });
        iteration++;

        if (iteration < divideInto) {
          setTimeout(generateElement, 0);
        }
      }, 0)}
    </div>
  );
};

export default Counter;
