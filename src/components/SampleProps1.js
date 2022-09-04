import React from 'react'

function SampleProps1(props) {
  return (
    <div>
        <div>Welcome</div>
        {props.children}
    </div>
  )
}

export default SampleProps1