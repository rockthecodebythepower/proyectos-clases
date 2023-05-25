import { useState } from "react";
import { createContext } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {

    const [ productos, setProductos ] = useState([]);

    return (
        <ProductContext.Provider value={{ productos, setProductos }}>
            {children}
        </ProductContext.Provider>
    )

}