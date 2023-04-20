import { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState('characters');

  return (
    <GlobalContext.Provider value={{ keyword, setKeyword }}>
      {children}
    </GlobalContext.Provider>
  );
};
