export const changePage = (action, page) => {
    if (action = "+") {
        page.page++
    } else {
        page.page--
    }
    page.component();
}