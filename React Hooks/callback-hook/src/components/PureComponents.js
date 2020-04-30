import React, { PureComponent } from 'react'

class PureComponents extends PureComponent {
    render() {
        console.log("******************** Pure Componet ********************************")
        return (
            <div>
             Pure Comp::   {this.props.name}
            </div>
        )
    }
}

export default PureComponents
