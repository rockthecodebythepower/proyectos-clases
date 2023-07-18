import { useState } from "react";

export const useMyForm = () => {

    const [formData, setFormData] = useState({});

    const controladorDeSubmits = (e, funcion) => {
        e.preventDefault();
        funcion(formData)
    }

    const saveData = (propiedad, e) => {
        setFormData({...formData, [propiedad]: e.target.value});
    }

    return {
        controladorDeSubmits,
        saveData
    }

}