import React, { Component } from 'react'

export class SampleProps extends Component {
  render() {
    return (
        <div>
            <h1>Hello {this.props.name}, {this.props.age}</h1>
      </div>
    )
  }
}

export default SampleProps