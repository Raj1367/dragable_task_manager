import React from 'react'
import Child from './Child'

const Parent = () => {

    const parentAlert = (name) => {
        alert(name)
    }

    return (
        <div>
            <Child alert={parentAlert} />
        </div>
    )
}

export default Parent