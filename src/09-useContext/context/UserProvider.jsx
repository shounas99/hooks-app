import { UserContext } from "./UserContext"

const user = {
    id: 123,
    name: 'Jonas',
    email: 'cris@gmail.com',
}

export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ hi: 'world', user: user}}>
        { children }
    </UserContext.Provider>
  )
}
