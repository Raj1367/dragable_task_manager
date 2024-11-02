import React from 'react'
import "../Styles/cell.css"


const Cell = ({ filled, activateCells,isDisabled }) => {
  return (
    <div>
      <button
        type="button"
        className={filled ? "cell activated_cell" : "cell"}
        onClick={activateCells}
        disabled={isDisabled}
      ></button>
    </div>
  )
}

export default Cell