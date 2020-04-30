import React, { Component } from 'react'

export class StatesEx extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:'Hi from constructor'
        }
    }
    static getDerivedStateFromProps(props,state){
        console.log('LifecycleA getDerivedStateFromProps called');

        
        
        return {
            message:'Hello from Static..'
        }
    }
    
    render() {
        return (
            <div>
                {this.state.message}
            </div>
        )
    }
}

export default StatesEx
