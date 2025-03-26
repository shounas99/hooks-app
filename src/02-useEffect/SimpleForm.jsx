import { useEffect, useState } from "react"

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'shounas',
        email: 'cris@gmail.com'
    })

    const { username, email } = formState
    
    const onInputChange = ({ target }) => {
        const { name, value } = target
        setFormState({
            ...formState,
            [ name ]: value,

        })
    } 

    useEffect( () => {
        console.log('formState changed!');
    }, [formState])

    useEffect( () => {
        console.log('email changed!');
    }, [email])


  return (
    <>
        <h1>Formulario Simple</h1>
        <hr />

        <input 
            type="text" 
            className="form-control"
            placeholder="Username"
            name="username"
            value={ username }
            onChange={ onInputChange }
        />
        <input 
            type="email" 
            className="form-control mt-2"
            placeholder="email@email.com"
            name="email"
            value={ email }
            onChange={ onInputChange }
        />
    </>
  )
}
