import React, { useState } from 'react'

const GridLights = () => {

    const [order, setOrder] = useState([]);
    const [isDeactivating, setIsDeactivating] = useState(false);
  
    const gridData = [
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
    ];
  
    const deactivateCells = () => {
      setIsDeactivating((prev)=>!prev);
      const timer = setInterval(() => {
        setOrder((origOrder) => {
          const newOrder = [...origOrder];
          newOrder.pop();
  
          if (newOrder.length === 0) {
            clearInterval(timer);
            setIsDeactivating((prev)=>!prev);
          }
  
          return newOrder;
        });
      }, 400);
    };
  
    const activateCells = (index) => {
      const newOrder = [...order, index];
      setOrder(newOrder);
      // deactivate
      if (newOrder.length === gridData.flat(1).filter(Boolean).length) {
        deactivateCells();
      }
    };

    const activateCell = (index) => {
        const newOrder = [...order, index];
        setOrder(newOrder);

        if (newOrder.length === config.flat(1).filter(Boolean).length) {
            deactivateCells();
          }
    }

    return (

        <div className="flex justify-center items-center h-screen">
            <div className="container">
                <div className="flex justify-center items-center">
                    <div className="grid grid-cols-3 gap-4">
                        {
                            gridData.flat(1).map((item, index) => (
                                item === 1 ? (<button key={index} className={`${order.includes(index) ? "border border-black bg-green-500" : ""} border border-black w-32 h-32 shadow-md`} onClick={() => activateCells(index)}></button>) : (<span></span>)
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GridLights