import {  useState } from "react"

export default function Counter(props){
    const [counter, setCounter] = useState(0);

    function onCounterClick() {setCounter(prevState => prevState+1);}

    return (
        <div onClick={onCounterClick}>
        {counter}
        </div>
    )
}

