import React, { Component } from 'react'
import ComponentC from './ComponentC'
import { UserProvider } from './userContext'

export class ContextMain extends Component {
  render() {
    return (
      <>
      {/* <UserProvider value="Sandeep"> */}
        {/* <ComponentC username={"Everyone"}></ComponentC> */}
        <ComponentC></ComponentC>
      {/* </UserProvider> */}
      </>
    )
  }
}

export default ContextMain