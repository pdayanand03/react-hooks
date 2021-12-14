import React, { useEffect, useState } from "react";

const IntervalCounter = () =>{
    const [counter, setCounter] = useState(0);
    useEffect(()=>{
        console.log("Interval Mounted")
        const interval = setInterval(()=>{
            setCounter(prevCount=>prevCount+1)
        },1000)

        return (()=>{
            console.log("Interval Unmounted")
            clearInterval(interval)
        })
    },[])
    return(
        <div>Timer: {counter} sec</div>
    )
}
export default IntervalCounter