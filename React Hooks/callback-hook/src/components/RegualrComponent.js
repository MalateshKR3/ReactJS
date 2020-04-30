import React, { Component,PureComponent } from 'react'

class RegualrComponent extends PureComponent {
    render() {
        console.log("*********** RegComponet ********************************")
        return (
            <div>
            Reg Comp::   {this.props.name}
            </div>
        )
    }
}

export default RegualrComponent
