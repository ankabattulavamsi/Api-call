import React from 'react'
import ComponentB from './components/ComponentB'
import ComponentA from './components/ComponentA'
import ErrorBoundary from './components/ErrorBoundary'

const App = () => {
  return (
    <center>
    <ErrorBoundary>
      <ComponentA />
      <ComponentB />
    </ErrorBoundary>
    </center>
  )
}

export default App
