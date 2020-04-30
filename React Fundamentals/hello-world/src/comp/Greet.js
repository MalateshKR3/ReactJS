import React from 'react'

export let Greet=(props)=>{
let {name,hobby,child}=props;    
return <div>
    <hr></hr>
<h6>Welcome to {name} {hobby}</h6>
<h6>{child}</h6>
    <hr></hr>
    </div>

}

export let Greet1=()=><h6>Welcome to ReactJS tutorial1.</h6>


