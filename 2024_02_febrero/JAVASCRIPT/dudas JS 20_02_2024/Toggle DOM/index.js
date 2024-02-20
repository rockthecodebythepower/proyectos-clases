const container = document.querySelector(".container");

container.addEventListener("click", () => container.classList.toggle("rojo"));

/* container.addEventListener("click", () => {
    if (container.className.includes("rojo")) {
        container.classList.remove("rojo");
    } else {
        container.classList.add("rojo");
    }
}); */