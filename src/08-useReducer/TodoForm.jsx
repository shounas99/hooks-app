import { useForm } from "../hooks/useForm"

export const TodoForm = ({ onNewTodo }) => {
 
  const { description, onInputChange, onResetForm } = useForm({
    description: ''
  })

  const onFormSubit = ( event ) => {
    event.preventDefault()
    if(description.length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      description: description,
      done: false
    }

    onNewTodo(newTodo)
    onResetForm()
  }

  return (
    <form onSubmit={ onFormSubit }>
        <input 
            type="text"
            placeholder="What do we have to do?"
            className="form-control"
            name="description"
            value={ description }
            onChange={ onInputChange }
        />
        <button
            type="submit"
            className="btn btn-outline-primary mt-1"
        > 
            Agregar
        </button>
    </form>
  )
}
