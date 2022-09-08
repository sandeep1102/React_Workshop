import React, { useRef } from 'react'

function FirstUseRefComp() {
    const inputRef = useRef(null)

  return (
    <>
        <input type="text" ref={inputRef}></input>
        <button onClick={() => inputRef.current.focus()}>Get Focus</button>
    </>
  )
}

export default FirstUseRefComp