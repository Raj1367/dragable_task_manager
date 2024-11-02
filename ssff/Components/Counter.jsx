import React, { useContext } from 'react'
import { GlobalContext } from './GlobalContext'

const Counter = () => {

    const { state, dispatch } = useContext(GlobalContext)

    return (
        <div>
            <h3>Counter:{state.count}</h3>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>INCREMENT</button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>INCREMENT</button>
            <button onClick={() => dispatch({ type: "INCREMENTBY5", payload: 5 })}>INCREMENT BY 5</button>
        </div>
    )
}

export default Counter