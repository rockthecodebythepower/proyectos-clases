import React, { useState } from "react";

export const userContext = React.createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const name = "Paquito";

  return (
    <userContext.Provider value={{ user, setUser, name }}>
      {children}
    </userContext.Provider>
  );
};

export default UserProvider;
