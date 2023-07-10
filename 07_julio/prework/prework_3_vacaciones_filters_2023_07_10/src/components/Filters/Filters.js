import { holidays } from "../../data/data";
import { renderHolidays } from "../Holidays/Holidays";
import "./Filters.css";

let STARS = 0;
let PRICES = 0;

export const renderFilters = () => {

    const app$$ = document.querySelector("#app");

    app$$.innerHTML = `
        <div class="filters">
            <div>
                <label>Estrellas</label>
                <div class="filter-stars">

                </div>
            </div>
            <div>
                <label>Precio</label>
                <div class="filter-price">

                </div>
            </div>
            <button class="buscar">Buscar</button>
            <button class="limpiar">Limpiar Filtros</button>
        </div>
    `;

}

export const renderFilterStars = () => {
    const filterStars$$ = document.querySelector(".filter-stars");

    filterStars$$.innerHTML = "";

    for (let i = 0; i < 5; i++) {
        
        const star$$ = document.createElement("img");

        star$$.className = "star"
        star$$.src = "/estrella-blanca.png";

        star$$.addEventListener("click", () => filtrarStars(i))

        filterStars$$.appendChild(star$$);
        
    }

    const button$$ = document.querySelector(".buscar");

    button$$.addEventListener("click", () => renderHolidays(holidays.filter((holiday) => holiday.rate >= STARS && holiday.price <= PRICES)));

    const limpiar$$ = document.querySelector(".limpiar");

    limpiar$$.addEventListener("click", () => {
        renderHolidays();
        renderFilterPrice();
        renderFilterStars();
    });
}

export const renderFilterPrice = () => {
    const filterPrices$$ = document.querySelector(".filter-price");

    filterPrices$$.innerHTML = "";

    for (let i = 0; i < 5; i++) {
        
        const price$$ = document.createElement("p");

        price$$.className = "price";
        price$$.style.opacity = "0.2";
        price$$.textContent = "$";

        price$$.addEventListener("click", () => filtrarPrices(i))

        filterPrices$$.appendChild(price$$);
        
    }
}

const filtrarStars = (posicion) => {

    STARS = posicion + 1;

    console.log("estrellas",STARS);

    const stars$$ = document.querySelectorAll(".star");

    for (let i = 0; i < stars$$.length; i++) {
        
        if (i <= posicion) {
            stars$$[i].src = "/estrella.png";
        } else {
            stars$$[i].src = "/estrella-blanca.png";
        }
        
    }

}

const filtrarPrices = (posicion) => {

    PRICES = posicion + 1;

    console.log("precio", PRICES);

    const prices$$ = document.querySelectorAll(".price");

    for (let i = 0; i < prices$$.length; i++) {
        
        if (i <= posicion) {
            prices$$[i].style.opacity = "1";
        } else {
            prices$$[i].style.opacity = "0.2";
        }
        
    }
}