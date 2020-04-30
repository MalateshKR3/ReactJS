import React, { Component } from 'react'

const HOC = (OriginalComponent)=>{
    class EnhancedComponent extends Component{
        constructor(props) {
            super(props)
        
            this.state = {
                 count:0
            }
        }
        
        mouseOverHandler=()=>{
            this.setState(prevState=>{
             return{  count:this.state.count+1}
            })
            }
        render(){
              return  <OriginalComponent  count={this.state.count} mouseOverHandler={this.mouseOverHandler} {...this.props} />
        }
    }
    return EnhancedComponent
}

export default HOC
