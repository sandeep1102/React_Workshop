import React, { Component } from 'react'
import axios from 'axios'

export class HttpPostComp extends Component {

    constructor(){
        super()

        this.state = {
            userid: '',
            title: '',
            body: ''
        }
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    submitHandler =(e) => {
        e.preventDefault()
        console.log(this.state)

        axios.post("https://jsonplaceholder.typicode.com/posts", this.state)
            .then((result) => {
                console.log(result)
            })
            .catch((error) => {
                console.log(error)
            })
    }

  render() {
    const { userid, title, body } = this.state

    return (
      <div>
        <form onSubmit={this.submitHandler}>
            <div>
                <input type="text" name="userid" value={userid} onChange={this.changeHandler}></input>
            </div>
            <div>
                <input type="text" name="title" value={title} onChange={this.changeHandler}></input>
            </div>
            <div>
                <input type="text" name="body" value={body} onChange={this.changeHandler}></input>
            </div>
            <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default HttpPostComp