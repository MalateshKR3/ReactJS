import React, { Component } from 'react'

class UserGreeting extends Component {

constructor(props) {
    super(props)

    this.state = {
         isLoggedIn:false
    }
}

logout=()=>{
    this.setState({
        isLoggedIn:false
    })
}
login=()=>{
    this.setState({
        isLoggedIn:true
    })
}


    render() {
let message;

{/*if(this.state.isLoggedIn){
    message=<div><h4>Welcome Malatesh</h4><button onClick={this.logout}><b>LOGOUT</b></button></div>
}
else{
    message=<div><h4>Welcome Guest</h4><button onClick={this.login}><b>LOGIN</b></button></div>
}

       return(
       <div>{message}</div>
       )
       */}
       return(
        this.state.isLoggedIn?<div><h4>Welcome Malatesh!</h4><button onClick={this.logout}><b>LOGOUT</b></button></div>:
        <div><h4>Welcome Guest!</h4><button onClick={this.login}><b>LOGIN</b></button></div>
        )
    }
}

export default UserGreeting
