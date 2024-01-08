//! nuevo componente creado

import "./DivMulticolor.css";

const DivMulticolor = ({ nombre, apellido = "" }) => {

    console.log("Hola, soy un DivMulticolor");

    return (
        <div className="cambiar">
            <h2>Hola <span>{nombre}</span> {apellido}</h2>
        </div>
    );
}

export default DivMulticolor;