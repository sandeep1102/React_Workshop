import React, { Component } from 'react'

export class RegularComp extends Component {
  render() {
    console.log('****************** Regular Component ********************')
    return (
      <h1>{this.props.message}</h1>
    )
  }
}

export default RegularComp