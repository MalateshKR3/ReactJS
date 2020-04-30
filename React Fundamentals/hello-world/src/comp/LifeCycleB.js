import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Malatesh'
        }
        console.log('LifeCycleB constructor called...');
        
    }

    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleB getDerivedStateFromProps called');
        
        return null;
    }
    componentDidMount(){
        console.log('LifeCycleB componentDidMount called..');
        
    }
    shouldComponentUpdate(){
        console.log('LifecycleB shouldComponentUpdate called');
        return true
        
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('LifecycleB getSnapshotBeforeUpdate called...');
        return null
    }
     
    componentDidUpdate(){
        console.log('LifecycleB componentDidUpdate called');
        
    }
    
    render() {
        console.log('LifeCycleB rendered called');
        
        return (
            <div>
                LifeCycleB. 
            </div>
        )
    }
}

export default LifeCycleB
