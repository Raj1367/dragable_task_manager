import React from 'react'
import "./App.css"
import GlobalProvider from './GlobalContext'
import Counter from './Counter'
const App = () => {
  return (
    <div className='App'>
      <GlobalProvider>
        <Counter></Counter>
      </GlobalProvider>
    </div>
  )
}

export default App