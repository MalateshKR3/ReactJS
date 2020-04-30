import React, { useState, useEffect } from 'react'

function MouseEffectHook() {
    const[x,setX]=useState(0);
    const[y,setY]=useState(0);

    const logThisMousePoints=(event)=>{
        console.log("Inside logThisMousePoints");
        setX(event.clientX)
        setY(event.clientY)
    }

    useEffect(()=>{
        console.log("Inide useEffect");
        window.addEventListener('mouseover',logThisMousePoints)
        return()=>{
            window.removeEventListener('mouseover',logThisMousePoints)
        }
    },[])

    return (
        <div>
            <h3>X: {x}</h3>
            <h3>Y: {y}</h3>
        </div>
    )
}

export default MouseEffectHook
