import React,{useState} from 'react'

function HookCounterFour() {
    const [items,setItems]=useState([]);

   const addItems=()=>{
        setItems([...items,{
            id:items.length,
            value:'Malatesh'
        },
        {
            id:items.length,
            value:'Monith'
        },
        {
            id:items.length,
            value:'Sharukh'
        }


        ])
    }


    return (
        <div>
            <button onClick={addItems}>Add Items</button>
            <ul>
                {
                    items.map(item=>(
                    <li key={item.id}>{item.value}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default HookCounterFour
