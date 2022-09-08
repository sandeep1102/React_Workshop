import React, { useEffect, useRef } from 'react'

function SecondUseRefComp() {
    const countRef = useRef(0);
  
    const handle = () => {
      countRef.current++;
      console.log(`Clicked ${countRef.current} times`);
    };
    
    useEffect(() => {
        console.log('hit')
    }, [countRef])

    return (
        <>
            <h1>{countRef.current}</h1>
            <button onClick={handle}>Click me</button>
        </>
    )
}

export default SecondUseRefComp