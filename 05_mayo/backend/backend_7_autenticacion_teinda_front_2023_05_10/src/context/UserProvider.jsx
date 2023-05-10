import { createContext, useState } from "react";

export const userContext = createContext();

const UserProvider = ({ children }) => {

    const [user, setUser] = useState();
    const [token, setToken] = useState();

  return (
    <userContext.Provider value={{token, setToken, user, setUser}}>
        {children}
    </userContext.Provider>
  )
}

export default UserProvider