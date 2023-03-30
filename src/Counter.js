import {useState} from "react";

const generateArray = (length, base) => [...Array(length).keys()].map(i => i + base);

const Counter = ({from, to}) => {
    const chunkSize = 200;
    const initialLength = (Math.min((to - from), chunkSize))
    const [array, setArray] = useState(generateArray(initialLength, from));
    let iteration = 0;
    const divideInto = Math.round((to - from) / chunkSize);
    setTimeout(function addToArray() {
        setArray((prevState) => {
            const lastValue = prevState[prevState.length - 1];
            const length = Math.min((to - lastValue), chunkSize);
            return prevState.concat(generateArray(length, lastValue + 1));
        })
        iteration++;
        if (iteration < divideInto) {
            setTimeout(addToArray, 0);
        }
    }, 0);
    return <div>{array.map(n => <p key={n}>{n}</p>)}</div>;
}
export default Counter;