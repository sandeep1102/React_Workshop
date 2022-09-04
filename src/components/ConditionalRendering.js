import React from 'react'
import SampleProps from './SampleProps'

function ConditionalRendering() {
     const show = true
// const a = <h1>hello</h1>

// const b = <h1>Welcome</h1>

//     return a

return(
    <div>
{/* {show ? <h1>Hello</h1> : <h1>Welcome</h1>} */}
{show && <h1>Hello</h1>}
<SampleProps></SampleProps>
    </div>
)

 }



export default ConditionalRendering