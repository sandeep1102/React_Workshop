import React, { Component } from 'react'
// import PureComp from './PureComp'
import RegularComp from './RegularComp'

export class PureCompMain extends Component {

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
      // <PureComp message={this.state.name}></PureComp>
    )
  }
}

export default PureCompMain
