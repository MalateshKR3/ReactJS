import React, { useState } from 'react'

function HookCounterTwoSets() {
    const initialCount=0
    const[count,setCount]=useState(0)

    const incFive=()=>{
        for(let i=0;i<5;i++){
            setCount(retValue=>{
                return retValue+1
            })
               
        }
    }

    return (
        <div>
            COUNT:{count}
            <hr/>
            <button onClick={()=>setCount(count+1)}>INCREMENT</button>
            <hr/>
            <button onClick={()=>setCount(count-1)}>DECCREMENT</button>
            <hr/>
            <button onClick={()=>setCount(initialCount)}>RESET</button>
            <hr/>
            <button onClick={incFive}>INCREMENT-FIVE</button>
            <hr/>
        </div>
    )
}

export default HookCounterTwoSets
