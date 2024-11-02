import React, { useState } from 'react'

const DynamicCounter = () => {

    const decrements = ["-100", "-10", "-1"]
    const increments = ["+100", "+10", "+1"]

    const [value, setValue] = useState(0)
    const [history, setHistory] = useState([])
    const [redoList, setRedoList] = useState([])


    const maintainHistory = (action, prev, curr) => {
        setHistory([{ action, prev, curr }, ...history])
    }

    const handleClick = (actionValue) => {
        const action = parseInt(actionValue)
        console.log(action);
        maintainHistory(action, value, action + value)
        setValue((existingValue) => existingValue + action)
    }

    const handleUndo = () => {
        if (history.length) {
            const copyHist = [...history];
            const firstItem = copyHist.shift();
            setHistory(copyHist);
            setValue(firstItem.prev);
            setRedoList([...redoList, firstItem])
        }
    }

    const handleRedo = () => {
        if (redoList.length) {
            const copyRedoList = [...redoList];
            const poppedValue = copyRedoList.pop();
            setRedoList(copyRedoList);
            const { action, prev, curr } = poppedValue;
            setValue(curr);
            maintainHistory(action, prev, curr);
        }
    }

    console.log("latestValue", value)
    console.log("history", history)
    console.log("redolist", redoList)



    return (
        <div className="flex justify-center items-center">

            <div className="container">
                <h3 className="text-center my-5 capitalize font-semibold text-2xl">undoable counter</h3>
                <div className="flex flex-col gap-14">
                    <div className="flex justify-center items-center gap-8">
                        <button onClick={handleUndo} className="bg-slate-600 px-5 py-2 rounded-md shadow-md text-white">Undo</button>
                        <button onClick={handleRedo} className="bg-slate-600 px-5 py-2 rounded-md shadow-md text-white">Redo</button>
                    </div>

                    <div className="flex justify-center items-center gap-4">

                        <div className="flex items-center justify-center gap-3">
                            {
                                decrements.map((button, index) =>
                                    <button
                                        className="bg-slate-400 w-20 h-8 rounded-md shadow-md text-white cursor-pointer flex justify-center items-center"
                                        onClick={() => handleClick(button)} key={index}>
                                        {button}
                                    </button>)
                            }
                        </div>

                        <div className="px-8 font-semibold text-[30px]">
                            <p>{value}</p>
                        </div>

                        <div className="flex items-center gap-3">
                            {
                                increments.map((button, index) =>
                                    <button
                                        className="bg-slate-400 w-20 h-8 rounded-md shadow-md text-white cursor-pointer flex justify-center items-center"
                                        onClick={() => handleClick(button)} key={index}>
                                        {button}
                                    </button>)
                            }
                        </div>
                    </div>

                    <div className="flex justify-center items-center">
                        <div className="border w-[400px] h-[130px] overflow-y-auto">
                            <h1 className="text-center capitalize font-semibold font-xl p-2 bg-slate-100">history</h1>
                            {
                                history.map((data, index) => (
                                    <div key={index} className="flex justify-center items-center gap-8 border p-1">
                                        <div className="flex items-center gap-1">
                                            <p className="font-semibold text-sm text-red-500">Action:</p>
                                            <p className="text-sm">{data.action}</p>
                                        </div>

                                        <div className="flex items-center gap-1">
                                            <p className="font-semibold text-sm text-blue-500">Previous Data:</p>
                                            <p className="text-sm">{data.prev}</p>
                                        </div>


                                        <div className="flex items-center gap-1">
                                            <p className="font-semibold text-sm text-green-500">Current Data:</p>
                                            <p className="text-sm">{data.curr}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>


                </div>



            </div>
        </div>
    )
}

export default DynamicCounter