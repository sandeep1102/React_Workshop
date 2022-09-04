import React from 'react'

function S1(drops) {
    function clickHandler(){
        alert('clicked')
    }
  return (
    <>
        <div>Welcome {drops.name}, {drops.age}</div>
        <button onClick={clickHandler}>Click to alert</button>
    </>
  )
}

export default S1