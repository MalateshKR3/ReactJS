import React, { Component } from 'react'
import RegualrComponent from './RegualrComponent'
import PureComponents from './PureComponents'
import MemoComponents from './MemoComponents'

class RegParentComponent extends Component {

constructor(props) {
    super(props)

    this.state = {
         name:'Malatesh'
    }
}

componentDidMount(){
    setInterval(()=>{
        this.setState({
            name:'Malatesh'
        })
    },2000)
}

    render() {
        console.log("*********** RegParentComponet ********************************")
        return (
            <div>
                <h1>Parent Component</h1>
                <MemoComponents name={this.state.name}/>
                {/*<RegualrComponent name={this.state.name}/>*/}
               {/* <PureComponents name={this.state.name}/>*/}
            </div>
        )
    }
}

export default RegParentComponent
