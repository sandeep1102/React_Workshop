import React, { Component } from 'react'
import RefsClassComp from './RefsClassComp'

export class ReferencingClassComp extends Component {

    constructor(){
        super()

        this.myRef = React.createRef()
    }

    clickHandler(){
        this.myRef.current.focusInput()
    }

  render() {
    return (
      <>
        <RefsClassComp ref={this.myRef}></RefsClassComp>
        <button onClick={() => { this.clickHandler() }}>Focus Class Component</button>
      </>
    )
  }
}

export default ReferencingClassComp