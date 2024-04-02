import "./Alert.css";

export const Alert = ( message ) => {
    const alert = document.createElement("div");

    alert.classList.add("alert");
    alert.textContent = message;

    document.body.append(alert);

    setTimeout(() => {
        alert.remove();
    }, 5000);
}