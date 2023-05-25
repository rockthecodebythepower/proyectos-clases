import {createContext, useState} from "react";

export const UserContext = createContext();

export const UserContextProvider = ({children}) => {
	//Inicializar lazy un estado
	const [userLogged, setUserLogged] = useState(() => {
		//El estado inicial de userLogged va a ser true si hay algo en el localStorage y si no false
		if (localStorage.getItem("user")) {
			return true;
		} else {
			return false;
		}
	});

	return (
		<UserContext.Provider value={{userLogged, setUserLogged}}>
			{children}
		</UserContext.Provider>
	);
};
