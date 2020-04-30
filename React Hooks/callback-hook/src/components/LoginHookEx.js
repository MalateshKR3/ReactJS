import React, { useState, useEffect } from 'react'

function LoginHookEx() {
    const[loginBean,setLoginBean]=useState({
        firstName:'',
        secondName:'',
        place:''
    })
    const[mes,setMes]=useState(false)

    useEffect(()=>{
        if(loginBean.firstName===''){
            setMes(false)
        }
        
    })
    return (
        <div>
            <form>
                <label htmlFor='first'> FirstName</label>
                <input id='first' placeholder='Enter First name' type='text' value={loginBean.firstName} name='firstName' onChange={(event)=>setLoginBean({...loginBean,firstName:event.target.value})} /><br/>
                <label htmlFor='second'> FirstName</label>
                <input id='second' placeholder='Enter second name' type='text' value={loginBean.secondName} name='secondName' onChange={(event)=>setLoginBean({...loginBean,secondName:event.target.value})} /><br/>
                <label htmlFor='place'> Place</label>
                <input id='place' type='text' placeholder='Enter city name' value={loginBean.place} name='place' onChange={(event)=>setLoginBean({...loginBean,place:event.target.value})} /><br/>
            </form>
    <h2>{JSON.stringify(loginBean)}</h2>
    { mes?<h1>Filed</h1>:<h3>Not Filled</h3> }
        </div>
    )
}

export default LoginHookEx
