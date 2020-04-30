import React,{useState,useEffect} from 'react'

function HookMouse() {
    const [x, setX]=useState(0);
    const [y, setY]=useState(0);

    const mouseFun= e=>{
        console.log('Mouse Event');
        setX(e.clientX);
        setY(e.clientY)
        
    }

useEffect(()=>{
    console.log('USE-EFFECT CALLED');
    window.addEventListener('mousemove',mouseFun)

    return ()=>{
        console.log('Component Unmount..');
        window.removeEventListener('mousemove',mouseFun)
    }
    
},[])

    return (
        <div>
           HOOKS X: {x}, Y:{y} 
        </div>
    )
}

export default HookMouse
