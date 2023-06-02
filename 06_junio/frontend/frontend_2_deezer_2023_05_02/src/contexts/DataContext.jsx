import {createContext, useState} from "react";

export const DataContext = createContext();

export const DataContextProvider = ({children}) => {
	const [keyword, setKeyword] = useState("Avenged Sevenfold");
	const [theme, setTheme] = useState("");

	return (
		<DataContext.Provider value={{keyword, setKeyword, theme, setTheme}}>
			{children}
		</DataContext.Provider>
	);
};
