import React from 'react'
const Progressbar = ({ progress, color }) => {

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="container">
                <div className="bg-black rounded-full border shadow-md">
                    <div style={{ width: `${progress}%`, backgroundColor: `${color ? color : "lightgreen"}`, borderRadius: 20, height: 30, paddingLeft: "10px", transition: "all" }}>
                        {`${progress}`}%
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Progressbar