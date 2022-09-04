import React from 'react'

function S5(props) {

  return (
    <>
    <div>S5</div>
    <button onClick={()=> props.clickHandler()}>Alert Method Prop</button>
    </>
  )
}

export default S5