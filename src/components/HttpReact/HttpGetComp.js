import React, { Component } from 'react'
import axios from 'axios'

export class HttpGetComp extends Component {

    constructor(){
        super()

        this.state = {
            posts: []
        }
    }

    componentDidMount(){
        // axios.get("https://jsonplaceholder.typicode.com/posts")
        //     .then((result) => {
        //         console.log(result)

        //         this.setState({
        //             posts: result.data
        //         })
                
        //     })
        //     .catch((error) => {
        //         console.log(error)
        //     })
    }

  render() {
    const { posts } = this.state
    return (
      <div>
        <h1>List of Posts</h1>
        {
            posts.length ? posts.map(post => <h2 key={post.id}>{post.title}</h2>) : null
        }
      </div>
    )
  }
}

export default HttpGetComp