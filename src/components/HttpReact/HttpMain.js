import React, { Component } from 'react'
import HttpGetComp from './HttpGetComp'
import HttpPostComp from './HttpPostComp'

export class HttpMain extends Component {
  render() {
    return (
      <>
        {/* <HttpGetComp></HttpGetComp> */}
        <HttpPostComp></HttpPostComp>
      </>
    )
  }
}

export default HttpMain