import React from 'react'
import ComponentC from './ComponentC'

export const UserContext = React.createContext()
// export const MessageContext = React.createContext("Welcome Everyone")

function ContextMain() {
  return (
    <>
      <UserContext.Provider value="Nitesh">
        <ComponentC></ComponentC>
      </UserContext.Provider>
    </>
  )
}

export default ContextMain