import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            userName: '',
            comments: '',
            skill: 'react'
        }
    }

    InputHandler = (event) => {
        this.setState({
            userName: event.target.value
        })
    }

    TextHandler = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    SelectHandler = (event) => {
        this.setState({
            skill: event.target.value
        })
    }

    SubmitHandler=(event)=>{
        alert(`${this.state.userName} ${this.state.comments} ${this.state.skill}`);
        event.preventDefault()
    }


    render() {
        return (
            <div className='App'>
                <form onSubmit={this.SubmitHandler}>
                    <div>
                        <label>UserName</label>
                        <input type='text' value={this.state.userName} onChange={this.InputHandler} />
                    </div>
                    <div>
                        <label>Comments:</label>
                        <textarea value={this.state.comments} onChange={this.TextHandler} />
                    </div>
                    <div>
                        <label>UserName</label>
                        <select value={this.state.skill} onChange={this.SelectHandler}>
                            <option value='rect'>React</option>
                            <option value='angular'>Angular</option>
                            <option value='vue'>Vue</option>
                        </select>
                    </div>
                    <input type='submit' value='SUBMIT'/>
                </form>
            </div>
        )
    }
}

export default Form
