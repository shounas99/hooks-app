import { useReducer } from "react"
import { todoReducer } from "./todoReducer"
import { TodoList } from "./TodoList"
import { TodoForm } from "./TodoForm"

const initialState = [
    {  
        id: new Date().getTime(),
        description: 'Recolectar 1',
        done: false
    },
    {  
        id: new Date().getTime() * 3,
        description: 'Recolectar 2',
        done: false
    },
]


export const TodoApp = () => {

    const [ todos, dispatchTodo] = useReducer( todoReducer, initialState)

    const handleNewTodo = ( newTodo ) => {
        console.log('new todooo', newTodo);
    }

    return (
        <>
            <h1>TodoApp 10, <small>pendientes: 2</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList todos={ todos }/>
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoForm onNewTodo={ handleNewTodo }/>
                </div>
            </div>
        </>
    )
}
