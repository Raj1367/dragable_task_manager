import React from 'react'
import "../Styles/todolist.css"
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
const TodoList = () => {

    const [todo, setTodo] = useState("")
    const [todoListItem, setTodoListItem] = useState([])

    const handleAdd = () => {
        if (todo) {
            setTodoListItem([...todoListItem, { id: uuidv4(), text: todo, isDone: false }])
        }
        setTodo("")
    }

    const handleDelete = (id) => {
        setTodoListItem(todoListItem.filter((item) => (item.id !== id)))
    }

    const handleCompleted = (id) => {
        setTodoListItem(todoListItem.map((item) => (item.id === id ? { ...item, isDone: !item.isDone } : item)))
    }

    const [edit, setEdit] = useState(false)
    const [editedTodo, setEditedTodo] = useState([])

    // handle Edit task
    const handleEdit = (id) => {
        setTodoListItem(todoListItem.map((item) => (
            item.id === id ? { ...item, text: editedTodo } : item
        )))
        setEdit(!edit)
    }

    console.log(todoListItem)

    return (
        <div>
            <div className="todo">
                <div className="container">

                    <div className="input_wrapper">
                        <input className="input" placeholder="Enter a task" type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
                        <button className="add_button" onClick={handleAdd}>Add</button>
                    </div>

                    {
                        todoListItem.length > 0 ? (
                            <div>
                                <h3>No of tasks: <span>{todoListItem.length}</span></h3>
                            </div>
                        ) : ("")
                    }


                    {
                        todoListItem.map((item, index) => {
                            return (
                                <div >
                                    {
                                        edit ?
                                            (
                                                <div className="editTodo_wrapper">
                                                    <input type="text" value={editedTodo} onChange={(e) => setEditedTodo(e.target.value)} />
                                                    <div className="todo_buttons_wrapper">
                                                        <button onClick={() => handleEdit(item.id)}>save</button>
                                                    </div>
                                                </div>
                                            ) :
                                            (<div className="todo_wrapper">
                                                <div><p style={item.isDone ? { textDecorationLine: "line-through" } : {}}>{item.text}</p></div>
                                                <div className="todo_buttons_wrapper">
                                                    <button onClick={() => handleCompleted(item.id)}>completed</button>
                                                    <button onClick={() => { if (!edit && !item.isDone) { setEdit(!edit) } }}>edit</button>
                                                    <button onClick={() => handleDelete(item.id)}>delete</button>
                                                </div>
                                            </div>
                                            )
                                    }

                                </div>
                            )
                        })
                    }


                </div>
            </div>
        </div>
    )
}

export default TodoList