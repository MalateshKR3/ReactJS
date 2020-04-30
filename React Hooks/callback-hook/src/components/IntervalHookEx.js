import React, { useState, useEffect } from 'react'

function IntervalHookEx() {

    const [count,setCount]=useState(0);

  const tick=()=>{
        setCount((prevCount)=>{
           return prevCount+1
        })
    }

useEffect(()=>{
  const interval= setInterval(tick,1000);
return()=>{
    clearInterval(interval)
}

},[])

    return (
        <div>
            {count}
        </div>
    )
}

export default IntervalHookEx
