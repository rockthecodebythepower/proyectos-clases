import { changePage } from "../../utils/pages";
import "./Pagination.css";

export const Pagination = (page) => {
    const divPagination = document.createElement("div");

    const buttonPrev = document.createElement("button");
    const buttonNext = document.createElement("button");
    const pageP = document.createElement("p");

    divPagination.className = "pagination";
    buttonPrev.textContent = "Previous";
    buttonNext.textContent = "Next";
    pageP.textContent = page.page;

    buttonPrev.addEventListener("click", () => changePage("-", page));
    buttonNext.addEventListener("click", () => changePage("+", page));

    divPagination.append(buttonPrev);
    divPagination.append(pageP)
    divPagination.append(buttonNext);
    return divPagination;
}