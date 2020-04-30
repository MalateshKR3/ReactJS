import React, { useState } from 'react'
import MouseEffectHook from './MouseEffectHook'

function MouseEffectHookContainer() {
    const[display,setDisplay]=useState(true)

    return (
        <div>
            <button onClick={()=>setDisplay(!display)}>Toogle</button>
            {display && <MouseEffectHook/>}
        </div>
    )
}

export default MouseEffectHookContainer
