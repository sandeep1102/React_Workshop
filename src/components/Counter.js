import React, { Component } from 'react'

export class Counter extends Component {

    constructor(){
        super()

        this.state= {
            count:0
        }
    }

    clickHandler(){
        // this.state.count = this.state.count + 1
        // this.setState({
        //     count:  this.state.count + 1
        // }, () => {
        //     console.log(this.state.count)
        // })

        this.setState((prevState) => ({
            count:  prevState.count + 1
        }), () => {
                console.log(this.state.count)
            })
        
    }

    incrementFive(){
        this.clickHandler()
        this.clickHandler()
        this.clickHandler()
        this.clickHandler()
        this.clickHandler()
    }

  render() {
    return (
        <div>
      <h1> Count - {this.state.count} </h1>
      <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    )
  }
}

export default Counter