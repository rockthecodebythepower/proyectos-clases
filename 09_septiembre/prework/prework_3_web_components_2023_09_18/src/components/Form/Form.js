import { Alert } from "../Alert/";
import "./Form.css";

const values = {
    name: "",
    password: "",
    repeated: ""
}

export const Form = () => {

    const app$$ = document.querySelector("#app");

    app$$.innerHTML = `
        <form id="register-form">
            <div>
                <label for="name">Nombre usuario</label>
                <input id="name"/>
            </div>
            <div>
                <label for="password">Contraseña</label>
                <input id="password" type="password"/>
            </div>
            <div>
                <label for="repeat-password">Repetir contraseña</label>
                <input id="repeat-password" type="password"/>
            </div>
            <button id="send">Enviar</button>
        </form>
    `

    const form$$ = document.querySelector("#register-form");

    form$$.addEventListener("submit", handleSubmit);

}

const handleSubmit = (e) => {
    e.preventDefault();

    const prevAlert$$ = document.querySelector(".alert");

    if (prevAlert$$) {
        prevAlert$$.remove();
    }

    if (!e.target[0].value && !e.target[1].value && !e.target[2].value) {
        Alert({
            type: "info",
            title: "Recuerda rellenar el formulario",
            description: "El formulario debe tener todos los campos rellenos para poder ser enviado.",
            position: "top_center"
        })
        return;
    }

    if (!e.target[0].value || !e.target[1].value || !e.target[2].value) {
        Alert({
            type: "error",
            title: "Formulario erróneo",
            description: "El formulario debe tener todos los campos rellenos para poder ser enviado.",
            position: "top_center"
        })
        return;
    }

    if (e.target[1].value !== e.target[2].value) {
        Alert({
            type: "warning",
            title: "Las contraseñas no coinciden",
            description: "Las contraseñas deberían coincidir, pero no es el caso, revísalas",
            position: "top_center"
        })
        return;
    }

    values.name = e.target[0].value;
    values.password = e.target[1].value;
    values.repeated = e.target[2].value;

    console.log("hemos enviado el formulario", values);

    Alert({
        type: "success",
        title: "Formulario enviado",
        description: "El formulario ha sido enviado correctamente!",
        position: "top_center"
    })
}