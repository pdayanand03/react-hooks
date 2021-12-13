import React, { useEffect, useState }  from "react";

const HookCleanUp = () =>{
    const [x,setX] = useState(0)
    const [y,setY] = useState(0)

    const mousePosition = (e)=>{
        console.log("mousePosition");
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(()=>{
        console.log("Mounted MousePosition")
        window.addEventListener('mousemove',mousePosition);

        return(()=>{
            console.log("Unmounted MousePosition")
            window.removeEventListener('mousemove',mousePosition);
        })
    },[])
    return(
        <div>
            <div>Position X-{x} Y-{y}</div>
        </div>
    )
}

export default HookCleanUp