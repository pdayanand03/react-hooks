import React, { useState } from "react";
import IntervalCounter from "./IntervalCounter";

const IntervalHandlerComponent = () =>{
    const [state, setState] = useState(true)
    return(
        <div>
            <button onClick={()=>setState(!state)}>Stop</button>
            {state?<IntervalCounter/>:<div>Timer: 00 sec</div>}
        </div>
    )
}
export default IntervalHandlerComponent;