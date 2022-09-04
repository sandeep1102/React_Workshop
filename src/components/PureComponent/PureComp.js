import React, { PureComponent } from 'react'

export class PureComp extends PureComponent {
  render() {
    console.log('****************** Pure Component ********************')
    return (
      <div>{this.props.message}</div>
    )
  }
}

export default PureComp