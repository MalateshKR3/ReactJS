import React,{useEffect,useState} from 'react'
import axios from 'axios'

function DataFetching() {
    const [posts,setPosts]=useState([])
    const [id,setId]=useState(1)
    const [idFromBtn,setIdFromBtn]=useState(1)
   const fetchHandler=()=>{
        setIdFromBtn(id)
    }

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromBtn}`)
        .then(res=>{
            setPosts(res.data)
            console.log(res);
            
        }).catch(err=>{
            console.log(err);
        })
    },[id])
    return (
        <div>

            <input type='text' value={id} onChange={e=>setId(e.target.value)}/>
            <button onClick={fetchHandler}>Fetch Data</button>
            <h2>{posts.title}</h2>
            <ul>
                {/*
                    posts.map(pos=>{
                    return(<li key={pos.id}> {pos.title}</li>)
                    })
                */ }
            </ul>
            
        </div>
    )
}

export default DataFetching
