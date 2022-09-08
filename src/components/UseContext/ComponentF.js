import React from 'react'
import { UserContext } from './ContextMain'

function ComponentF(props) {
  return (
    <>
    <UserContext.Consumer>
      {
        username => <h1>Welcome {username}</h1>
      }
      
    </UserContext.Consumer>
    </>
  )
}

export default ComponentF