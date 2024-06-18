export const submitLogin = async (e) => {
    e.preventDefault();

    const [userName, password] = e.target;

    const obj = {
        userName: userName.value,
        password: password.value
    }

    const send = JSON.stringify(obj);
  
    const res = await fetch("http://localhost:3000/api/v1/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: send,
    });
  
    const response = await res.json();
    console.log(response);
    localStorage.setItem("token", response.token);
    e.target.reset();
}