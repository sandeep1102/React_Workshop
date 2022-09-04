import React, { Component } from 'react'
// import ErrorBoundary from './ErrorBoundary'
import Hero from './Hero'

export class ErrorBoundaryMain extends Component {
  render() {
    return (
        <> 
            {/* <ErrorBoundary> */}
                <Hero heroName="Thor"></Hero>
                {/* <Hero heroName="Loki"></Hero> */}
            {/* </ErrorBoundary> */}
      </>
    )
  }
}

export default ErrorBoundaryMain