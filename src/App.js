import Counter from "./Counter";

const App = ({ from1 = 0, to1 = 10000, from2 = 200, to2 = 20000 }) => (
  <div style={{ display: "flex", flexDirection: "row" }}>
    <Counter from={from1} to={to1} />
    <span style={{ width: "20%" }} />
    <Counter from={from2} to={to2} />
  </div>
);

export default App;
