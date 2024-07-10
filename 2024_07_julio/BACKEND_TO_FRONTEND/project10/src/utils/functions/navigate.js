export const navigate = (e, route) => {
    e.preventDefault();
    window.history.pushState("", "", route.path);
    route.page();
}