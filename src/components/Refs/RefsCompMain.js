import React, { Component } from 'react'
// import ReferencingCompForwardRef from './ReferencingCompForwardRef'
// import ReferencingClassComp from './ReferencingClassComp'
import RefsClassComp from './RefsClassComp'

export class RefsCompMain extends Component {
  render() {
    return (
        <>
            <RefsClassComp></RefsClassComp>
            {/* <ReferencingClassComp></ReferencingClassComp> */}
            {/* <ReferencingCompForwardRef></ReferencingCompForwardRef> */}
      </>
    )
  }
}

export default RefsCompMain