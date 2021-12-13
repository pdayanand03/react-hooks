import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";

const HookUseEffect = () =>{
    const [data, setData] = useState(0);
    useEffect(()=>{
        document.title=`${data}`;
    },[data])
    return (
        <div>
            <button onClick={()=>setData(prevData=>prevData+1)}>Click {data}</button>
        </div>
    )
}
export default HookUseEffect;