import React, { Component } from 'react'
import axios from 'axios'

class PostForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userId:'',
             title:'',
             body:''
        }
    }

    changeHandler=(events)=>{
        this.setState({
            [events.target.name]:events.target.value
        })

    }
    submitHandler=(event)=>{
        event.preventDefault()
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then(response=>{
            console.log(response);
            
        })
       .catch(error=>{
            console.log(error)
        })
    }

    
    render() {
        //const {userId,title,body}=this.state
        return (
            
                <form onSubmit={this.submitHandler} method='post'>
                <div>
                    <input type='text' name='userId' value='' onChange={this.changeHandler}/>
                </div>
                <div>
                    <input type='text' name='title' value='' onChange={this.changeHandler}/>
                </div>
                <div>
                    <input type='text' name='body' value='' onChange={this.changeHandler}/>
                </div>
                <div>
                <input type='Submit' value='Submit'/>
                </div>
                </form>
           
        )
    }
}

export default PostForm
