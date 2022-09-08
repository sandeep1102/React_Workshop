import React, { useContext } from 'react'
import ComponentF from './ComponentF'
import { MessageContext } from './ContextMain'

function ComponentE() {

  // const message = useContext(MessageContext)

  return (
    <>
    {/* <h1>{message}</h1> */}
    <ComponentF></ComponentF>
    </>
  )
}

export default ComponentE