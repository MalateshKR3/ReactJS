import React, { Component } from 'react'

class Message extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: 'Welcome Visitor using state concept.'
        }
    }
    clickhandler=()=> {
        this.setState({
            message: 'Thank you for subscribing.'
        })
    }

    render() {
        return (
            <div>
                <h2>{this.state.message}</h2>
                <button onClick={this.clickhandler}>SUBSCRIBE</button>
            </div>
        )
    }
}

export default Message
