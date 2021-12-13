import React, { useState } from "react";
import HookCleanUp from "./HookCleanUp";

const MouseComponent = () =>{
    const [state,setstate] = useState(true)
    return (<div>
        <button onClick={()=>setstate(prevState=>!prevState)}>Toggle button</button>
        {state && <HookCleanUp/>}

    </div>)
}
export default MouseComponent