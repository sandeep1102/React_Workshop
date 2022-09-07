import React, { Component } from 'react'
import { UserConsumer } from './userContext'

export class ComponentF extends Component {
  // render() {
  //   return (
  //       <h1>Welcome {this.props.username}</h1>
  //   )
  // }

  render() {
    return (
        <UserConsumer>
            {
                (username) => {
                    return <h1>Welcome {username}</h1>
                }
            }
            
      </UserConsumer>
    )
  }
}

export default ComponentF