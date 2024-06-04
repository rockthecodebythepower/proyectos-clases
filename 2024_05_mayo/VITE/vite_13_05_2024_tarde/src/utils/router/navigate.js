export const navigate = (e, link) => {
    // click - a - recarga de la página
    // no recarga la página
    e.preventDefault();

    window.history.pushState({}, "", link.path);

    link.component();

    console.log(link);
}