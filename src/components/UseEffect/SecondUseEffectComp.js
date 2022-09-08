import React, { useEffect, useState } from 'react'

function SecondUseEffectComp() {
    const [count, setCount] = useState(0)

    const tick = () => {
        console.log(count)
        setCount(count + 1)
    }

    useEffect(() => {
       const interval = setInterval(tick, 1000)

       return () => {
        console.log('UnMount')
        clearInterval(interval)
       }
    }, [])

  return (
    <h1>{count}</h1>
  )
}

export default SecondUseEffectComp