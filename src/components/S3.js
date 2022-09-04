import React, { Component } from 'react'

export class Counter extends Component {

    constructor(){
        super()
        this.state = {
            count:0
        }
    }

    increment(){
        // this.state.count = this.state.count + 1
        this.setState((prevState) => ({
            count:prevState.count + 1
        }), () => {
            console.log(this.state.count)
        })
    }

    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

  render() {
    return (
        <>
            <div>Count = {this.state.count}</div>
            <button onClick={() => this.incrementFive()}>Increment</button>
      </>
    )
  }
}

export default Counter