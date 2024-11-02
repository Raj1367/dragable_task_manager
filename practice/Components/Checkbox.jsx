import React, { useState } from 'react'
import "../Styles/checkbox.css"
import Cell from './Cell'
const Checkbox = () => {

  const config = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ]

  console.log(config.flat(1))


  const [order, setOrder] = useState([])
  const [deactivated, setDeactiavte] = useState(false)

  const deactivateCells = () => {

    setDeactiavte(true)

    const timer = setInterval(() => {
      setOrder((orginalOrder) => {
        const deactiavedOrder = orginalOrder.slice()
        deactiavedOrder.pop()

        if (deactiavedOrder.length === 0) {
          clearInterval(timer)
          setDeactiavte(false)
        }

        return deactiavedOrder

      })
    }, 300);

  }

  const activateCells = (index) => {
    const newOrder = [...order, index]
    setOrder(newOrder)
    console.log(newOrder)

    if (newOrder.length === config.flat(1).filter(Boolean).length) {
      deactivateCells()
    }
  }

  return (
    <div>
      <div className="section">
        <div className="container">
          <div className="grid" style={{ gridTemplateColumns: `repeat(${config.length},1fr)` }}>
            {
              config.flat(1).map((item, index) => (
                item ?
                  (<Cell
                    key={index}
                    filled={order.includes(index)}
                    activateCells={() => activateCells(index)}
                    isDisabled={order.includes(index) || deactivated}
                  />)
                  : (<span></span>)
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkbox