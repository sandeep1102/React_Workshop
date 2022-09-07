import React, { useState } from 'react'

function FirstUseStateComp() {
const [count, setCount] = useState(0)

function increment(){
  setCount(count + 1)
  console.log(count)
}

  return (
    <>
        <h1>Count {count}</h1>
        <button onClick={() => increment()}>Increment</button>
    </>
  )
}

export default FirstUseStateComp