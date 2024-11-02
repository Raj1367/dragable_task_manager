import React from 'react'

const Child = ({ alert }) => {

    const name = "john davis"

    return (
        <div>
            <h2>User component</h2>
            <button onClick={() => alert(name)} >Click me</button>
        </div>
    )
}

export default Child