import React from 'react'

function PropsMethod(props) {
const {name, age} = props
console.log(props)

  return (<div>
            <div>Welcome {name}, {age}</div>
            {/* <button onClick={props.clickEvent}>Click</button> */}
    </div>
  )
}

export default PropsMethod