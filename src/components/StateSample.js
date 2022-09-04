import React, { Component } from 'react'

export class StateSample extends Component {



  constructor() {
    super()

    this.state = {
      message: "Welcome Everyone"
    }
  }

  clickHandler() {
    this.setState({
      message: "You have been subscribed"
    })
  }

  render() {
    const { name, age } = this.state
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={() => this.clickHandler()}>Subscribe</button>
      </div>
    )
  }
}

export default StateSample