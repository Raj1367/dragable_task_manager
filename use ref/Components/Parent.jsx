import React, { useRef } from 'react'
import Child from './Child'

const Parent = () => {

    let inputRef = useRef()

    const updateInput = () => {
        inputRef.current.value = "hello"
    }


    return (
        <div>
            <Child ref={inputRef} handleClick={updateInput}></Child>
           
        </div>
    )
}

export default Parent