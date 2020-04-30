import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
constructor(props) {
    super(props)

    this.state = {
         posts:[]
    }
}

componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response=>{
        console.log(response);
        this.setState({
            posts:response.data
        })
        
    })
    .catch(error=>{
        console.log(error);
        
    })
}


    render() {
        const {posts}=this.state
        return (
            <div>
               {
                   posts.map(post=>{
                       return (
                           <table key={post.id}>
                               <tbody>
                               <tr >
                       <td><h3>{post.id}</h3></td>
                       <td><h3>{post.title}</h3></td>
                               </tr>
                               </tbody> 
                           </table>
                       )
                   })
               }
            </div>
        )
    }
}

export default PostList
