import React,{useContext} from 'react'
import {UserContext, ChannelContext} from '../App'

function ComponentF() {
    const user=useContext(UserContext);
    const channel=useContext(ChannelContext);

    return (
        <div>
           <UserContext.Consumer>
               {
                (name)=>{
                return   <div>User name is {name}</div>

                }
            }
           </UserContext.Consumer>
        </div>
    )
}

export default ComponentF
