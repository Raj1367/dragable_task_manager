
import React, { useEffect, useState } from 'react'

const BrandFilter = () => {

    const data = [
        { type: "bags", brand: "mango" },
        { type: "bags", brand: "Dior" },
        { type: "bags", brand: "Gucci" },
        { type: "bags", brand: "hermes" },
        { type: "bags", brand: "channel" },
        { type: "watch", brand: "Rolex" },
        { type: "watch", brand: "hublot" },
        { type: "watch", brand: "patek phillipe" },
        { type: "watch", brand: "bretling" },
        { type: "watch", brand: "casio" },
        { type: "sports", brand: "nike" },
        { type: "sports", brand: "adidas" },
        { type: "sports", brand: "puma" },
        { type: "sports", brand: "asics" },
        { type: "sports", brand: "new balance" },
        { type: "clothing", brand: "tommly hilfiger" },
        { type: "clothing", brand: "USPA" },
        { type: "clothing", brand: "ralph lauren" },
        { type: "clothing", brand: "Lacoste" },
        { type: "clothing", brand: "hugo boss" }
    ]


    const filter = ["bags", "watch", "sports", "clothing"]

    const [filteredData, setFilteredData] = useState(data)
    const [activeFilters, setActiveFilters] = useState([])

    const handleClickFilter = (e) => {
        const category = e.target.id
        if (activeFilters.includes(category)) {
            setActiveFilters(activeFilters.filter((item) => item !== category))
        }

        else {
            setActiveFilters([...activeFilters, category])
        }
    }
    console.log(activeFilters)

    const filterProducts = () => {

        if (activeFilters.length) {
            const tempItems = data.filter((item) => activeFilters.includes(item.type))
            setFilteredData(tempItems)
        }

        else {
            setFilteredData(data)
        }
    }

    useEffect(() => { filterProducts() }, [activeFilters])

    return (
        <div>
            <div className="flex flex-col justify-center items-center gap-6">
                <div className="flex justify-center items-center gap-4">
                    {filter.map((item, index) => (
                        <button onClick={handleClickFilter} key={index} id={item} className={`rounded-md px-3 py-1 capitalize shadow-md ${activeFilters.includes(item) ? "bg-black text-white" : "bg-gray-200 text-black"}`}>
                            {item}
                        </button>
                    ))}
                </div>

                <div className="flex justify-center items-center gap-4 flex-wrap">
                    {
                        filteredData.map((item, index) => (
                            <div key={index} className="border-1 h-32 w-32 flex justify-center items-center shadow-md">
                                <div className="flex flex-col items-center">
                                    <h6 className="capitalize">{item.brand}</h6>
                                    <p className="capitalize">{item.type}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>


        </div>
    )
}

export default BrandFilter