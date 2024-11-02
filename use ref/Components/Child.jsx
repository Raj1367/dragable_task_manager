import React, { forwardRef } from 'react'

const Child = (props, ref) => {
    return (
        <div>
            <div>
                <input type="text" ref={ref} />
                <button onClick={props.handleClick}>update</button>
            </div>
        </div>
    )
}

export default forwardRef(Child)