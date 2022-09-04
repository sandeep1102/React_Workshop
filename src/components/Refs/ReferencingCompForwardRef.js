import React, { Component } from 'react'
import FRInput from './FRInput'

export class ReferencingCompForwardRef extends Component {

    constructor(){
        super()

        this.myRef = React.createRef()
    }

    clickHandler(){
        this.myRef.current.focus()
    }

  render() {
    return (
      <>
        <FRInput ref={this.myRef}></FRInput>
        <button onClick={() => { this.clickHandler() }}>Focus Component</button>
      </>
    )
  }
}

export default ReferencingCompForwardRef