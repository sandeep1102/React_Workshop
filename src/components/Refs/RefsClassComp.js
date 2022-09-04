import React, { Component } from 'react'

export class RefsClassComp extends Component {

    constructor(){
        super()

        this.inputRef = React.createRef()
    }

    componentDidMount(){
        this.focusInput()
    }

    focusInput(){
      this.inputRef.current.focus()
    }

    clickHandler = () => {
        alert(this.inputRef.current.value)
    }

  render() {
    return (
        <>
            <input type="text" ref={this.inputRef}></input> <br></br>
            <button onClick={this.clickHandler}>Click</button>
      </>
    )
  }
}

export default RefsClassComp