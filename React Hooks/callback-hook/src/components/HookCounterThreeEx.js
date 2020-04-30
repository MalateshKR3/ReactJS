import React, { useState } from 'react'

function HookCounterThreeEx() {
    const [name, setName] = useState({ firstName: '', lastName: '' })
    return (
        <div>
            <form>
                <input type='text' name='firstName' value={name.firstName} onChange={(event) => setName({...name, firstName: event.target.value})} />
                <input type='text' name='lastName' value={name.lastName} onChange={(event) => setName({...name, lastName: event.target.value})} />
            </form>
            <h3>Ypur FirstName is:  {name.firstName}</h3>
            <h3>Your LastName is: {name.lastName}</h3>
        </div>
    )
}

export default HookCounterThreeEx
