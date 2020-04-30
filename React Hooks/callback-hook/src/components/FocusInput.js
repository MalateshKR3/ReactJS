import React, { Component } from 'react'
import InputEx from './InputEx';

class FocusInput extends Component {

    constructor(props) {
        super(props)
        this.parentRef=React.createRef();
    }
    
    clickHandler=()=>{
        this.parentRef.current.focusInput();
    }

    render() {
        return (
            <div>
              <InputEx ref={this.parentRef}/>  
              <button onClick={this.clickHandler}>FOCUS-INPUT</button>
            </div>
        )
    }
}

export default FocusInput
