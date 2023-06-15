const name$$ = document.querySelector("#name");
const email$$ = document.querySelector("#email");
const password$$ = document.querySelector("#password");
const submit$$ = document.querySelector("form");

const data = {
    name: "",
    email: "",
    password: ""
};

const añadirInfo = (e) => {

    //! e.target es el input como tal 

    /* del objeto data estoy seleccionando la propiedad que coincide con el id de mi input */

    data[e.target.id] = e.target.value;

}

name$$.addEventListener("input", añadirInfo);
email$$.addEventListener("input", añadirInfo);
password$$.addEventListener("input", añadirInfo);


const enviar = (e) => {
    e.preventDefault();
    console.log(data);
}

submit$$.addEventListener("submit", enviar);