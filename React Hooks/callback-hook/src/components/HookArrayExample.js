import React, { useState } from 'react'

function HookArrayExample() {

const[items,setItems]= useState([])

const addValue=(event)=>{

    setItems([...items,{
        id:items.length+1,
        value:event.target.value
    }])

}

    return (
        <div>
        <div>
            <input type='text' onChange={addValue}/>
        </div>
         {
            items.map(item=>{
            return <h1 key={item.id}>{item.value}</h1>
            })
         }

        </div>

    )
}

export default HookArrayExample
