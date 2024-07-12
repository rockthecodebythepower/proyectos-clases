const registro = document.querySelector(".registro");
const login = document.querySelector(".login");

const register = async (e) => {
    e.preventDefault();

    const [emailInput, passwordInput] = e.target;

    const body = {
        email: emailInput.value,
        password: passwordInput.value
    };

    const res = await fetch("http://localhost:3000/api/v1/users/register", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    });

    const response = await res.json();

    console.log(response);

}

const getUsers = async () => {
    const res = await fetch("http://localhost:3000/api/v1/users", {
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    });
    const response = await res.json();
    console.log(response);
}

const loginFnc = async (e) => {
    e.preventDefault();

    const [emailInput, passwordInput] = e.target;

    const body = {
        email: emailInput.value,
        password: passwordInput.value
    };

    const res = await fetch("http://localhost:3000/api/v1/users/login", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    });

    const response = await res.json();

    localStorage.setItem("token", response.token);

    console.log(response);
}

registro.addEventListener("submit", register);
login.addEventListener("submit", loginFnc);

const button = document.querySelector(".getUsers");

button.addEventListener("click", getUsers);