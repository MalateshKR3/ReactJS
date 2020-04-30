import React, { useState, useEffect } from 'react'

function HookUseEffectEx() {
    const[name,setName] =useState('');

   useEffect(()=>{
       document.title=`${name}`
   })

    return (
        <div>
            <input type='text' value={name} onChange={(event)=>setName(event.target.value)} />
            <h3>
                {name}
            </h3>
        </div>
    )
}

export default HookUseEffectEx
