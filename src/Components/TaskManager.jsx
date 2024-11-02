import React, { useState } from 'react'

const TaskManager = () => {

    const TODO = "todo"
    const DOING = "doing"
    const DONE = "done"

    const [todo, setTodo] = useState("")
    const [todoList, setTodoList] = useState([])
    const [dragTask, setDragTask] = useState(null)
    const [editTodo, setEditTodo] = useState(null)
    console.log(todo)

    const handleKeyPress = (e) => {
        console.log(e.keyCode)
        if (e.keyCode === 13) {
            if (editTodo) {
                setTodoList(todoList.map((item) => item.id === editTodo.id ? { text: todo, id: editTodo.id, status: editTodo.status } : item))
                setEditTodo(null)
                setTodo("")
            }

            else {
                setTodoList([...todoList, { id: Date.now(), text: todo, status: TODO }])
                setTodo("")
            }
        }
    }

    console.log(todoList)

    const handleDrag = (e, item) => {
        setDragTask(item)
    }
    console.log(dragTask)


    const handleDragAndDrop = (status) => {
        setTodoList(todoList.map((item) => (item.id === dragTask.id ? { ...item, status: status } : item)))
        setDragTask(null)
    }

    const handleOnDrop = (e) => {
        const status = e.target.getAttribute("data-status")
        console.log("droping in", status)

        if (status === TODO) {
            handleDragAndDrop(TODO)
        }

        else if (status === DOING) {
            handleDragAndDrop(DOING)
        }

        else if (status === DONE) {
            handleDragAndDrop(DONE)
        }

    }

    const handleDragOver = (e) => {
        e.preventDefault()
    }

    const handleDelete = (id) => {
        setTodoList(todoList.filter((item) => item.id !== id))
    }

    const handleEdit = (item) => {
        setEditTodo(item)
        setTodo(item.text)
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="container w-[1000px]">
                <div className="flex flex-col justify-center items-center gap-3" >

                    <h2>Dragable Task Manager</h2>

                    <div className="flex gap-4 items-center w-[500px] my-4">
                        <input type="text" onKeyDown={handleKeyPress} className="border w-full h-10 shadow-sm rounded-md px-2" value={todo} onChange={(e) => setTodo(e.target.value)} />
                    </div>

                    <div className="flex justify-between gap-4 w-full">

                        <div data-status={TODO} onDrop={handleOnDrop} onDragOver={handleDragOver} className="w-full">
                            <h5 className="bg-yellow-500 w-full text-center p-3 shadow-md capitalize text-white" >todo</h5>
                            {
                                todoList.length > 0 && todoList.map((item) => (
                                    item.status === "todo" && (
                                        <div onDrag={(e) => handleDrag(e, item)} draggable key={item.id} className="flex justify-between w-full items-center px-3 py-2 border my-2 shadow-sm rounded-md">
                                            <span className="text-lg font-semibold capitalize">{item.text}</span>
                                            <div className="flex gap-1">
                                                <span onClick={() => handleEdit(item)} className="cursor-pointer hover:bg-blue-100 rounded-full p-1 text-lg">✏️</span>
                                                <span onClick={() => handleDelete(item.id)} className="cursor-pointer hover:bg-red-100 rounded-full p-1 text-lg">🗑️</span>
                                            </div>
                                        </div>
                                    )
                                ))
                            }
                        </div>

                        <div data-status={DOING} onDrop={handleOnDrop} onDragOver={handleDragOver} className="w-full">
                            <h5 className="bg-blue-500 w-full text-center p-3 shadow-md capitalize text-white" >doing</h5>
                            {
                                todoList.length > 0 && todoList.map((item) => (
                                    item.status === "doing" && (
                                        <div onDrag={(e) => handleDrag(e, item)} draggable key={item.id} className="flex justify-between w-full items-center px-3 py-2 border my-2 shadow-sm rounded-md">
                                            <span className="text-lg font-semibold capitalize">{item.text}</span>
                                            <div className="flex gap-1">
                                                <span onClick={() => handleEdit(item)} className="cursor-pointer hover:bg-blue-100 rounded-full p-1 text-lg">✏️</span>
                                                <span onClick={() => handleDelete(item.id)} className="cursor-pointer hover:bg-red-100 rounded-full p-1 text-lg">🗑️</span>
                                            </div>
                                        </div>
                                    )
                                ))
                            }
                        </div>

                        <div data-status={DONE} onDrop={handleOnDrop} onDragOver={handleDragOver} className="w-full">
                            <h5 className="bg-green-500 w-full text-center p-3 shadow-md capitalize text-white" >completed</h5>
                            {
                                todoList.length > 0 && todoList.map((item) => (
                                    item.status === "done" && (
                                        <div onDrag={(e) => handleDrag(e, item)} draggable key={item.id} className="flex justify-between w-full items-center px-3 py-2 border my-2 shadow-sm rounded-md">
                                            <span className="text-lg font-semibold capitalize">{item.text}</span>
                                            <div className="flex gap-1">
                                                <span onClick={() => handleEdit(item)} className="cursor-pointer hover:bg-blue-100 rounded-full p-1 text-lg">✏️</span>
                                                <span onClick={() => handleDelete(item.id)} className="cursor-pointer hover:bg-red-100 rounded-full p-1 text-lg">🗑️</span>
                                            </div>
                                        </div>
                                    )
                                ))
                            }
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskManager