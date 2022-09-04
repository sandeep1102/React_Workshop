import React from 'react'

function MemoComp(props) {
    console.log('*************** Memo Component *****************')
  return (
    <div>{props.message}</div>
  )
}

export default React.memo(MemoComp)