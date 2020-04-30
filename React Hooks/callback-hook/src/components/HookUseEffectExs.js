import React, { useState, useEffect } from 'react'

function HookUseEffectExs() {
const[name,setName]=useState('');
const[count,setCount]=useState(0);

useEffect(()=>{
    console.log('Useeffect called');
    document.title=`Counted ${count} times`
    document.title=`${name}`
},[count])

    return (
        <div>
            <input type='text' value={name} onChange={(event)=>setName(event.target.value)} />
            <button onClick={()=>setCount(count+1)}>Counted {count} times</button>
        </div>
    )
}

export default HookUseEffectExs
