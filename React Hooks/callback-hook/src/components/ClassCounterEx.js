import React, { Component } from 'react'

class ClassCounterEx extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    clickHandler=()=>{
        this.setState(prevState=>{
            return{
                count:prevState.count+1
            }
        })
    }
    
    render() {
        const {count}=this.state
        return (
            <div>
                <button onClick={this.clickHandler}>Counted {count} times</button>
            </div>
        )
    }
}

export default ClassCounterEx
