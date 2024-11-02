import React, { useContext } from 'react'
import { GlobalContext } from './GlobalContext'

const Counter = () => {

    const { state, dispatch } = useContext(GlobalContext)

    return (
        <div>
            <h2>Counter: {state.count}</h2>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", columnGap: "30px" }}>
                <button onClick={() => dispatch({ type: "INCREMENT" })}>INCREMENT</button>
                <button onClick={() => dispatch({ type: "DECREMENT" })}>DECREMENT</button>
                <button onClick={() => dispatch({ type: "INCREMENTBY5", payload: 5 })}>INCREMENTBY5</button>
                <button onClick={() => dispatch({ type: "DECREMENTBY5", payload: 5 })}>DECREMENTBY5</button>
            </div>
        </div>
    )
}

export default Counter