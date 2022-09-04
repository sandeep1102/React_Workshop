import React, { Component } from 'react'

class EventHandling extends Component {

    constructor(){
        super()

        this.state = {
            message: "Hello Everyone"
        }
        
        // 3
        // this.clickHandler = this.clickHandler.bind(this) 
    }

    // clickHandler(){
    //     this.setState({
    //         message: "Welcome Everyone"
    //     })
    // }
    // 4
    clickHandler = () => {
        this.setState({
            message: "Welcome Everyone"
        })
    }

  render() {
    return (
        <div>
            <h1>{this.state.message}</h1>
             {/* 1 */}
            {/* <button onClick={this.clickHandler.bind(this)}>Show Welcome Message</button> */}
             {/* 2 */}
             {/* <button onClick={() => this.clickHandler()}>Show Welcome Message</button> */}

             <button onClick={this.clickHandler}>Show Welcome Message</button>
      </div>
    )
  }
}

export default EventHandling


