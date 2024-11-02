import React, { useState } from 'react'

import { IoIosStar } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";


const Rating = () => {


    const data = [...new Array(5).fill().keys().map((n) => n + 1)]
    const [ratings, setRatings] = useState(0)
    const [hover, setHover] = useState(0)


    return (
        <div className="flex justify-center items-center h-screen gap-2">
            {data.map((rate) =>
                <div
                    onClick={() => setRatings(rate)}
                    onMouseOver={() => setHover(rate)} key={rate}
                    onMouseLeave={() => setHover(ratings)}>
                    {rate <= ((ratings && hover) || hover) ? <IoIosStar size={50} /> : <IoIosStarOutline size={50} />}
                </div>)
            }
        </div>
    )
}

export default Rating