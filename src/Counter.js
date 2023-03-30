import {useState} from "react";

const Counter = ({from, to}) => {
    let iteration = 0;
    const [array, setArray] = useState([]);
    const render = (from, to) => {
        setTimeout(function generate() {
            setArray((prevState) => {
                const base = from + (iteration * 100)
                let res = [];
                for (let i = base; i < base + 100 && i < to; i++) {
                    res.push(i);
                }
                return prevState.concat(res);
            })
            iteration++;
            if (iteration < 0) {
                setTimeout(generate, 0);
            }
        }, 0);
    }
    render(from, to);
    return <div>{array.map(n => <p key={n}>{n}</p>)}</div>;
}
export default Counter;
