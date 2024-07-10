export const createPage = (id) => {
    const main = document.querySelector("main");
    const div = document.createElement("div");

    main.innerHTML = "";
    div.id = id

    main.append(div);
    return div;
}