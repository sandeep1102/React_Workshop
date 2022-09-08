import React from 'react'
import { WithoutUseMemoComp } from './WithoutUseMemoComp'
import { WithUseMemo } from './WithUseMemo'

function UseMemoDemo() {

  return (
    // <WithoutUseMemoComp></WithoutUseMemoComp>
    <WithUseMemo></WithUseMemo>
  )
}

export default UseMemoDemo