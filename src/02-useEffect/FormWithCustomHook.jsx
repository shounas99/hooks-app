// import { useEffect, useState } from "react"

import { Message } from "./Message"
import { useForm } from "../hooks/useForm"

export const FormWithCustomHook = () => {

    const { formState, onInputChange, username, email, password } = useForm(
    {
        username: '',
        email: '',
        password: ''
    })

    // const { username, email, password } = formState

    return (
        <>
            <h1>Form with custom Hook</h1>
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

            <input 
                type="password" 
                className="form-control mt-2"
                placeholder="Contraseña"
                name="password"
                value={ password }
                onChange={ onInputChange }
            />

            {
                (username === 'shounas2') && <Message />
            }
        </>
    )
}
