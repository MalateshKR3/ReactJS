import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        return (
            <div>
                <h3>Welcome Mr {this.props.name} and your hobby is {this.props.hobby}</h3>
                <h4>{this.props.children}</h4>
            </div>
        )
    }
}

export default Welcome
