import React from 'react'
import Person from './Person'

function Namelist() {
    const names=['Malatesh','Monith','Sharukh','Malatesh']
    const persons = [
        {
            id: 100,
            name: 'Malatesh',
            place: 'Soraba'

        },
        {
            id: 101,
            name: 'Monith',
            place: 'Harihara'
        },
        {
            id: 102,
            name: 'Sharukh',
            place: 'Sagara'
        }




    ]
const namesList=names.map((name,index)=><h3 key={index}>{index} {name}</h3>)

    return (
        <div>
            {namesList}
        </div>
    )
}

export default Namelist
