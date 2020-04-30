import React, { Component } from 'react'

class ClassHookExample extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:''
        }
    }

    mounHandler=(event)=>{
        this.setState({
            name:event.target.value
        })
    }
    componentDidMount(){
        console.log('Hiiiiiiiiiii');
        document.title=`${this.state.name}`
    }
    componentDidUpdate(props,state){
        console.log('Helloooooooooooooo');
        document.title=`${this.state.name}`
    }
    
    render() {
        return (
            <div>
               <input type='text' value={this.state.name} onChange={this.mounHandler} />
               <h3>{this.state.name}</h3>
            </div>
        )
    }
}

export default ClassHookExample
