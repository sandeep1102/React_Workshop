import React, { Component } from 'react'
// import MemoComp from './MemoComp';
import RegularComp from './RegularComp'

export class MemoCompMain extends Component {

    constructor(){
        super()

        this.state = {
            name: "Welcome to React Workshop"
        }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: "Welcome to React Workshop"
            })    
        }, 2000); // 2 seconds interval
        
    }

  render() {
    // console.log('****************** Main Component ********************')
    return (
      <RegularComp message={this.state.name}></RegularComp>
      // <MemoComp message={this.state.name}></MemoComp>
    )
  }
}

export default MemoCompMain
