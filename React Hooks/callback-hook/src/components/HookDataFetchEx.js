import React, { useState, useEffect } from 'react'
import axios from 'axios';

function HookDataFetchEx() {


    const[post,setPost]=useState({});
    const[val,setVal]=useState(1)
    const[valu,setValu]=useState(1)

    const setValue=()=>{
       
        
        setValu(val)
        console.log("Here "+val);
        
    }
   

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${valu}`)
        .then(response=>{
            console.log(response.data);
            setPost(response.data)
        }).catch(error=>{
            console.log(error);
            
        })
    },[valu])

    return (
      
        <div>
            <input type='text' value={val} onChange={(event)=>setVal(event.target.value)}/>
            <button onClick={setValue}>FETCH</button>
        <h3>{post.id} {post.title}</h3>
        </div>
    )
}

export default HookDataFetchEx
