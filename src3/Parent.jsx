import React, { useRef } from 'react'
import Child from './Child'

const Parent = () => {

    const inputRef = useRef(null)

    const handleClick = () => {
        inputRef.current.value = "1000"
        inputRef.current.focus()
    }

    return (
        <div>
            <h1>Forward ref in react</h1>
            <Child ref={inputRef} />
            <button onClick={handleClick}>Update InnputBox</button>
        </div>
    )
}

export default Parent