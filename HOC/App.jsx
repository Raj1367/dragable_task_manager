import React from 'react'
import "./App.css"
import Counter from './Components/Counter'
import { HOCRed, HOCGreen } from "./Components/HOC"

const App = () => {
  return (
    <div className='App'>
      <HOCRed component={Counter}></HOCRed>
      <HOCGreen component={Counter}></HOCGreen>
    </div>
  )
}

export default App