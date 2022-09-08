import React from 'react'
import FirstUseRefComp from './FirstUseRefComp'
import SecondUseRefComp from './SecondUseRefComp'
import { Stopwatch } from './StopWatch'

function UseRefMain() {
  return (
    <FirstUseRefComp></FirstUseRefComp>
    // <SecondUseRefComp></SecondUseRefComp>
    // <Stopwatch></Stopwatch>
  )
}

export default UseRefMain