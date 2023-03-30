
const Counter = ({from, to}) => {
  const consecutiveNumbers = [...Array(to-from).keys()].map(i => i + from);
  const groups = [];
  for (let i = 0; i <= consecutiveNumbers.length; i += 100) {
    const groupNumbers = consecutiveNumbers.slice(i, i + 100);
    const groupItems = groupNumbers.map(n => <li key={n}>{n}</li>);
    groups.push(<ul key={i}>{groupItems}</ul>);
  }
  return <div>{groups}</div>;
}


export default Counter;
