import React, { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0)

    return (
        <div>
            <div>
                <h3>Counter:{count}</h3>
                <button onClick={() => setCount(count + 1)}>Update</button>
            </div>
        </div>
    )
}

export default Counter