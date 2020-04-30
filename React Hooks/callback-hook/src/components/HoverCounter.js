import React, { Component } from 'react'
import HOC from './WithCounter'

class HoverCounter extends Component {


    render() {
       // const {count,name , mouseOverHandler}= this.props
        return (
            <div>
                <h3 onMouseOver={this.props.incrementCount}>  Hovered on me!!! {this.props.count} {this.props.name}</h3>
            </div>
        )
    }
}

export default HoverCounter
