import React from 'react'

function S4(props) {
    function clickHandler(name){
        alert(`hello ${name}`)
    }
  return (
    <>
        <div>S4</div>
        <button onClick={() => clickHandler(props.name)}>alert props</button>
    </>
  )
}

export default S4