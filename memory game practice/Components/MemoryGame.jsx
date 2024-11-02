import React, { useEffect } from 'react'
import { useState } from 'react'

const DynamicTailwindCssConfig = {
    gridCols1: "grid-cols-1",
    gridCols2: "grid-cols-2",
    gridcols3: "grid-cols-3",
    gridCols4: "grid-cols-4",
    gridCols5: "grid-cols-5",
    gridCols6: "grid-cols-6",
    gridCols7: "grid-cols-7",
    gridCols8: "grid-cols-8",
    gridCols9: "grid-cols-9",
    gridCols10: "grid-cols-10",
    width100: "w-[100px]",
    width200: "w-[200px]",
    width300: "w-[300px]",
    width400: "w-[400px]",
    width500: "w-[500px]",
    width600: "w-[600px]",
    width700: "w-[700px]",
    width800: "w-[800px]",
    width900: "w-[900px]",
    width1000: "w-[1000px]",
}

const MemoryGame = () => {

    const [gridSize, setGridSize] = useState(4)
    const [cards, setCards] = useState([])
    const [flipped, setFlipped] = useState([])
    const [solved, setSolved] = useState([])
    const [disabled, setDisabled] = useState(false)
    const [winner, setWinner] = useState(false)

    const startGame = () => {
        const totalCards = gridSize * gridSize
        const cardPairCount = Math.floor(totalCards / 2)
        const NumberOfCards = [...Array(cardPairCount).fill().keys()].map((n) => n + 1)
        const TotalNoOfCards = [...NumberOfCards, ...NumberOfCards]
        const shuffleCards = TotalNoOfCards.sort(() => Math.random() - 0.5)
        const updatedCards = shuffleCards.map((card, index) => ({ id: index, card }))
        setCards(updatedCards)
        setFlipped([])
        setSolved([])
        setWinner(false)
    }


    const checkMatch = (secondId) => {
        const [firstId] = flipped
        if (cards[firstId].card === cards[secondId].card) {
            setSolved([...solved, firstId, secondId])
            setFlipped([])
            setDisabled(false)
        }

        else {
            setTimeout(() => {
                setFlipped([])
                setDisabled(false)
            }, 1000);
        }
    }

    const handleClickTile = (id) => {

        if (flipped.length === 0) {
            setFlipped([id])
            return
        }

        if (flipped.length === 1) {

            setDisabled(true)

            if (id !== flipped[0]) {
                setFlipped([...flipped, id])
                checkMatch(id)
            }

            // check match
            else {
                setFlipped([])
                setDisabled(false)
            }

        }
    }

    const isFlipped = (id) => flipped.includes(id) || solved.includes(id)
    const isSolved = (id) => solved.includes(id)

    useEffect(() => {
        startGame()
    }, [gridSize])

    useEffect(() => {
        if (solved.length == cards.length && cards.length > 0) {
          setWinner(true)
        }
      }, [solved, cards])

    console.log(cards)
    console.log(flipped)

    return (
        <>
            <div className="flex justify-center items-center">
                <div className="container p-4">
                    <div className="flex flex-col justify-center items-center gap-4">
                        <div>
                            <h2>Memory game</h2>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <label htmlFor="gridsize" className="text-lg font-semibold">Grid Size: (max 10): </label>
                            <input type="number" value={gridSize} onChange={(e) => setGridSize(e.target.value)} className="border rounded-md w-12 h-8 text-center" />
                        </div>

                        <div className={`grid grid-cols-${gridSize} gap-2 mt-3 w-[${gridSize * 100}px]`}  >
                            {
                                cards?.map((item) => {
                                    return (
                                        <button
                                            key={item.id}
                                            className={`aspect-square flex items-center justify-center rounded-lg shadow-md text-xl 
                                                font-semibold transition-all duration-300 cursor-pointer 
                                                ${isFlipped(item.id) ? isSolved(item.id) ? "bg-green-500 text-white" : `bg-blue-400 text-white` : "bg-gray-300 text-gray-500"}`}
                                            onClick={() => handleClickTile(item.id)}>
                                            {isFlipped(item.id) ? item.card : "?"}
                                        </button>
                                    )
                                })
                            }
                        </div>


                        {
                            winner && (
                                <div className="flex justify-center items-center">
                                    <p className="text-3xl font-semibold capitalize text-green-500 animate-bounce">you won!</p>
                                </div>
                            )
                        }

                        <div className="flex justify-center items-center pt-3" >
                            <button onClick={startGame} className={` text-white text-lg transition-colors font-semibold  py-2 px-8 rounded-md ${winner ? "bg-green-500" : "bg-red-500 hover:bg-red-600"}`}>{winner ? "Play Again" : "Reset"}</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default MemoryGame