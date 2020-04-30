import React from 'react'

function ChildComp(props) {
    return (
        <div>
            <button  onClick={()=>props.greetHandler('CHILD')}>Greet Parent.</button>
        </div>
    )
}

export default ChildComp
