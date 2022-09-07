import React, { useState } from 'react'

function SecondUseStateComp() {
const [count, setCount] = useState(0)

const [message, setMessage] = useState('Welcome')

function increment(){
    setCount(prevCount => prevCount + 1)
}

function incrementFive(){
    increment()
    increment()
    increment()
    increment()
    increment()
}

  return (
    <>
        <h1>Count {count}</h1>
        <button onClick={() => incrementFive()}>Increment</button>
    </>
  )
}

export default SecondUseStateComp