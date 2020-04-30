import React,{useState} from 'react'

function HookCounterThree() {
    const [name,setName]=useState({firstName:'',
                                    lastName:''})

    return (
        <div>
            <form>
              <input type='text' value={name.firstName} onChange={events=>setName({...name,firstName:events.target.value})}/>
              <input type='text' value={name.lastName} onChange={events=>setName({...name,lastName:events.target.value})}/> 
              <h3>Your Firstname is - {name.firstName}</h3>
              <h3>Your LastName is - {name.lastName}</h3>
              <h4>{JSON.stringify(name)}</h4>
            </form> 
        </div>
    )
}

export default HookCounterThree
