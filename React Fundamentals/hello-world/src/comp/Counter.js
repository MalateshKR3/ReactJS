import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }

    clickCounter=()=>{
        this.setState((prevStates,props)=>({
            count:prevStates.count+1
        }))
    }
    clickCounter5=()=>{
        this.clickCounter()
        this.clickCounter()
        this.clickCounter()
        this.clickCounter()
        this.clickCounter()
    }
    
    render() {
        return (
            <div>
                <button onClick={this.clickCounter5}>{this.props.name} <b>CLICKED</b> {this.state.count} times</button>
            </div>
        )
    }
}

export default Counter
