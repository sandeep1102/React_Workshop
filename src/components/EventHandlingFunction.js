import React from 'react'

function EventHandlingFunction() {

    // function alertFunction(){
    //     alert("Welcome Everyone")
    // }

    // function alertFunction(message){
    //     alert(message)
    // }

    const alertFunction = (message) => {
        alert(message)
    }

  return (
    <div>
        <div>Hello Everyone</div>
        <button onClick={() => alertFunction("Helo")}>Show Welcome in Alert</button>
    </div>
  )
}

export default EventHandlingFunction