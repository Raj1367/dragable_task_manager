import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const BookConcetTickets = () => {

    const vipTickets = [...Array(16).keys()].map((n) => n + 1)
    const vipData = vipTickets.map((item) => ({ ticket: item, category: "vip", index: uuidv4() }))
    console.log(vipData)

    const execuitveTickets = [...Array(36).keys()].map((n) => n + 1)
    const execuitveData = execuitveTickets.map((item) => ({ ticket: item, category: "executive", index: uuidv4() }))
    console.log(execuitveData)

    const economyTickets = [...Array(64).keys()].map((n) => n + 1)
    const economyData = economyTickets.map((item) => ({ ticket: item, category: "economy", index: uuidv4() }))
    console.log(economyData)

    const [vipticketData, setVipTicketData] = useState(vipData)
    const [executiveTicketData, setExecutiveTicketData] = useState(execuitveData)
    const [economyTicketData, setEconomyTicketData] = useState(economyData)
    const [selectedTickets, setSelectedTickets] = useState([])
    console.log(selectedTickets)

    const handleCLickTile = (item) => {
        if (selectedTickets.length < 5) {
            setSelectedTickets([...selectedTickets, item])
        }
        else {
            alert(`you cannot book more then 5 tickets`)
        }
    }



    const handleBooking = () => {

        const vipBookings = selectedTickets.filter((item) => item.category.includes("vip"))
        const vipBookingsData = vipBookings.map((item) => item.ticket)

        const executiveBookings = selectedTickets.filter((item) => item.category.includes("executive"))
        const executiveBookingsData = executiveBookings.map((item) => item.ticket)

        const economyBookings = selectedTickets.filter((item) => item.category.includes("economy"))
        const economyBookingsData = economyBookings.map((item) => item.ticket)

        alert(`
            vip booking seats no:  ${vipBookingsData.join(",")}
            executive booking seats no : ${executiveBookingsData.join(",")}
            economy booking seats no : ${economyBookingsData.join(",")}
            `)
    }

    return (
        <div className="flex justify-center items-center">
            <div className="container w-[700px]">
                <div className="flex flex-col justify-center items-center gap-16 mt-5">

                    <div>
                        <h5 className="text-center mb-3">Vip section(4x4)</h5>
                        <div className="grid grid-cols-4">
                            {
                                vipticketData.map((item) => {
                                    return (<button disabled={selectedTickets.includes(item)} key={item.index} onClick={() => handleCLickTile(item)} className={`${selectedTickets.includes(item) ? "bg-red-500" : "bg-green-500"} hover:bg-yellow-200 w-12 h-12 flex items-center justify-center border cursor-pointer `}>{item.ticket}</button>)
                                })
                            }
                        </div>
                    </div>


                    <div>
                        <h5 className="text-center mb-3">Executive section(6x6)</h5>
                        <div className="grid grid-cols-6">
                            {
                                executiveTicketData.map((item) => {
                                    return (<button disabled={selectedTickets.includes(item)} key={item.index} onClick={() => handleCLickTile(item)} className={`${selectedTickets.includes(item) ? "bg-red-500" : "bg-green-500"} hover:bg-yellow-200 w-12 h-12 flex items-center justify-center border cursor-pointer `}>{item.ticket}</button>)
                                })
                            }
                        </div>
                    </div>


                    <div>
                        <h5 className="text-center mb-3">Economy section section(8x8)</h5>
                        <div className="grid grid-cols-8">
                            {
                                economyTicketData.map((item) => {
                                    return (<button disabled={selectedTickets.includes(item)} key={item.index} onClick={() => handleCLickTile(item)} className={`${selectedTickets.includes(item) ? "bg-red-500" : "bg-green-500"} hover:bg-yellow-200 w-12 h-12 flex items-center justify-center border cursor-pointer `}>{item.ticket}</button>)
                                })
                            }
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center my-4 gap-12">
                    <button onClick={handleBooking} className="bg-blue-500 px-5 py-2 rounded-md text-white shadow-md active:scale-95 transition-all">confim booking</button>
                    <button onClick={() => setSelectedTickets([])} className="bg-red-500 px-5 py-2 rounded-md text-white shadow-md active:scale-95 transition-all">reset</button>
                </div>

            </div>
        </div>
    )
}

export default BookConcetTickets