import React, { Component } from 'react'

export class S2 extends Component {
    
    constructor(){
        super()
        this.state = {
            name: "Sandeep",
            age:28
        }
    }

    clickHandler(){
        this.setState({
            name: "Nitesh"
        })
    }

  render() {
    return (
        <>
            <div>Welcome {this.state.name}, {this.state.age}</div>
            <button onClick={() => this.clickHandler()}>Change Name</button>
        </>
    )
  }
}

export default S2