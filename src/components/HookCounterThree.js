import React, { useState } from "react";

const HookCounterThree = () =>{
    const [name, setName] = useState({firstName:"",lastName:""})
    const styles ={fontWeight:"bold"}
    return(
        <div>
            <input type = "text" placeholder="FirstName" value={name.firstName} onChange={e=>setName({...name,firstName:e.target.value})}/>
            <input type = "text" placeholder="LastName" value={name.lastName} onChange={e=>setName({...name,lastName:e.target.value})}/>
            <div>
                Your firstName-<span style={styles}>{name.firstName}</span> and lastName-<span style={styles}>{name.lastName}</span>
            </div>
        </div>
    )
}
export default HookCounterThree