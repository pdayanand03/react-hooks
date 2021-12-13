import React, { useState } from "react";

const HookCounterFour = () =>{
    const [data,setData] = useState([])
    const addNumber =()=>{
        setData([...data,{
            id:data.length,
            value:Math.floor(Math.random()*10)+1
        }])
    }
    return(
        <div>
            <button onClick={addNumber}>Add Number</button>
            <ul>
                {
                    data.map((item,i)=>{
                        return(<li key={i}>{item.value}</li>)
                    })
                }
            </ul>
        </div>
    )
}
export default HookCounterFour;