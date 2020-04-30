import React from 'react'

function Person({person,id}) {
    return (
        <div>
            <h4 key={person.id}>Person Id is {id} name is {person.name} and lives in {person.place}</h4>
        </div>
    )
}

export default Person
