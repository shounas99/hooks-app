import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer"
import { TodoList } from "./TodoList"
import { TodoForm } from "./TodoForm"

const initialState = []
const init = () => {
    return JSON.parse( localStorage.getItem('todos') || [] )
}

export const TodoApp = () => {
    
    const [ todos, dispatchTodo] = useReducer( todoReducer, initialState, init)
    
    //localStorage
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ))
    }, [todos])
        
    const handleNewTodo = ( newTodo ) => {
        const action = {
            type: '[TODO] Add TODO',
            payload: newTodo
        }
        dispatchTodo(action)
    }
    const handleDeleteTodo = ( id ) => {
        dispatchTodo({
            type: '[TODO] Delete TODO',
            payload: id
        })
    }
    const handleToggleTodo = ( id ) => {
        dispatchTodo({
            type: '[TODO] Toggle TODO',
            payload: id
        })
    }

    return (
        <>
            <h1>TodoApp 10, <small>pendientes: 2</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList 
                        todos={ todos }
                        onDeleteTodo={ handleDeleteTodo }
                        onToggleTodo={ handleToggleTodo }
                    />
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoForm 
                        onNewTodo={ handleNewTodo } 
                    />
                </div>
            </div>
        </>
    )
}
