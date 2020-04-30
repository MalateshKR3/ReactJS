import React, { Component } from 'react'
class ClickHandlerBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:'Hi Welcome'

        }
        this.clickFunArrowClassConstructor=this.clickFunArrowClassConstructor.bind(this);
    }
    clickFunBind(){
        this.setState({
            message:'Good Bye by Bind Event!!'
        })
    }

    clickFunArrow(){
        this.setState({
            message:'Good Bye by arrow function render approach..!!'
        })
    }
    clickFunArrowClassConstructor(){
        this.setState({
            message:'Good Bye by Class property constructor.!!'
        })
    }
    
    clickFunArrowFunc=()=>{
        this.setState({
            message:'Good Bye by Arrow function...!!'
        })
    }

    
    
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <div>
                    <hr/>
              <button onClick={this.clickFunBind.bind(this)}>Say Bye by Bind Event Approach!!</button>
            
              </div>
              <hr/>
              <button onClick={()=>this.clickFunArrow()}>Say Bye by Arrow function Approach inrender!!</button> 
              <hr/>
              <button onClick={this.clickFunArrowClassConstructor}>Say Bye by class property constructor.!!</button>
              <hr/>
        {/* <button onClick={this.clickFunArrowFunc()}>Say Bye by Arrow function Approach!!</button> */}
             
            </div>
        )
    }
}

export default ClickHandlerBind
