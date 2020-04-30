import React, { Component } from 'react'

export class ClickCounter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }

    increment=(name)=>{
        this.setState(prevState=>{
            return {count:prevState.count+1,
                    name:'Malatesh'
            }
        })
    }
    
   
    render() {
        return (
            <div>
               {this.props.children(this.state.count,this.increment)}
            </div>
        )
    }
}

export default ClickCounter
