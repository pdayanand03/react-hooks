import React, { useState } from "react";

const HookCounterTwo = () =>{
    const initalCount =0
    const [count, setCount] = useState(initalCount)
    return(
        <div>
            <div>Count {count}</div>
            <button onClick={()=>setCount(initalCount)}>Reset</button>
            <button onClick={()=>setCount(count=>count+1)}>Increment</button>
            <button onClick={()=>setCount(count=>count-1)}>Decrement</button>
        </div>
    )
}
export default HookCounterTwo 