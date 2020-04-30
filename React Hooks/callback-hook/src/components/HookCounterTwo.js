import React, { useState } from 'react'

function HookCounterTwo() {
    const initialCount=0;
    const [count,setCountsd]=useState(initialCount);
const incrementFive=()=>{
   for(let i=0;i<5;i++){
    setCountsd(prevCount=>prevCount+1);
   }
}

    return (
        <div>
            <hr/>
            Count: {count}
            <hr/>
            <button onClick={()=>setCountsd(initialCount)}>Reset</button>
            <hr/>
            <button onClick={()=>setCountsd(count+1)}>Increment</button>
            <hr/>
            <button onClick={()=>setCountsd(count-1)}>Decrement</button>
            <hr/>
            <button onClick={incrementFive}>Increment5</button>
            <hr/>
        </div>
    )
}

export default HookCounterTwo
