import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Malatesh'
        }
        console.log('LifecycleA constructor called...');
        
    }

    static getDerivedStateFromProps(props,state){
        console.log('LifecycleA getDerivedStateFromProps called');
        
        return null;
    }
    componentDidMount(){
        console.log(' LifeCycleA componentDidMount called..');
        
    }
    
    shouldComponentUpdate(){
        console.log('LifecycleA shouldComponentUpdate called');
        return true
        
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('LifecycleA getSnapshotBeforeUpdate called...');
        return null;
    }
     
    componentDidUpdate(){
        console.log('LifecycleA componentDidUpdate called');
        return null
    }
    changeHandler=()=>{
        this.setState({
            name:'Monith'
        })
    }

    render() {
        console.log('LifeCycleA rendered called');
    
        return (
            <div>
                
                LifeCycleA. 
                <button onClick={this.changeHandler}>Change state..</button>
                <LifeCycleB/>
                
            </div>
        )
    }
}

export default LifeCycleA
