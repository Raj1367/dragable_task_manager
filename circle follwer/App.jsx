import React, { useEffect, useState } from 'react'

const App = () => {


  const [cursorX, setCousorX] = useState("")
  const [cursorY, setCousorY] = useState("")


  setInterval(() => {
    window.addEventListener("mousemove", (e) => {
      setCousorX(e.clientX)
      setCousorY(e.clientY)
    })
  }, 30);



  return (
    <div>
      <div className={`bg-black rounded-full w-10 h-10 absolute m-2`} style={{ left: cursorX + "px", top: cursorY + "px" }}></div>
    </div>
  )
}

export default App