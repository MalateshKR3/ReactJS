import React, { Component } from 'react'

export class IntervalClassExample extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    componentDidMount(){
        this.interval=setInterval(this.tick,1000)
    }
    componentWillUnmount(){
        this.interval=clearInterval(this.interval)
    }
    tick=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    
    render() {
        return (
            <div>
                <h3>{this.state.count}</h3>
            </div>
        )
    }
}

export default IntervalClassExample
