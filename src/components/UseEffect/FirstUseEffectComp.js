import React, { useEffect, useState } from 'react'

function FirstUseEffectComp() {

    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
        // console.log(count)
    }

    // useEffect(() => {
    //     console.log(count)
    // })
    
    // useEffect(() => {
    //     console.log(count)
    // }, [])
    
    // useEffect(() => {
    //     console.log(count)
    // }, [count])

  return (
    <>
        <h1>Count: {count}</h1>
        <button onClick={()=> increment()}>Increment</button>
    </>
  )
}

export default FirstUseEffectComp