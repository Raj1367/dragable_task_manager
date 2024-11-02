import React from 'react'
import "./App.css"
import GlobalProvider from './Components/GlobalContext'
import Counter from './Components/Counter'
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