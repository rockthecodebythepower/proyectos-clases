import "./Users.css";

export const Users = async () => {
    const users = document.querySelector(".users");

    const res = await fetch("http://localhost:3000/api/v1/users", {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    });
    const response = await res.json();
    console.log(response);
}