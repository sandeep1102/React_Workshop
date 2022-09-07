import React, { useState } from 'react'

// Array
function FourthUseStateComp() {

  const [items, setItems] = useState([])

  function clickHandler(){
    const inititialStartCount = [10,20,40,12,45,863,45,655,98,12,65,36,45,78,98,63,52,41,23,65,98,45,66,44,55,22,33,11,77,88,99]
    setItems([ ...items, inititialStartCount[items.length] ])
  }

  return (
    <div>
      <h1>
        Items List
      </h1>
      <button onClick={() => clickHandler()}>Add Item</button>
      {
        items.length > 0 &&
        (items.map((item, index) => <h3 key={index}>{item}</h3>))
      }
      
    </div>
  )
}

export default FourthUseStateComp