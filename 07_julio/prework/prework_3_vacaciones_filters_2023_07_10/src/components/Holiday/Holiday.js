import { renderStars } from "../Stars/Stars";
import { renderPrice } from "../Price/Price";
import "./Holiday.css";

export const printHoliday = (holiday) => {

    return `
    <div class="holiday">
        <h3>${holiday.name}</h3>
        <div class="img-wrp">
            <img src="${holiday.image}"/>
        </div>
        <div class="info">
            <div>${renderStars(holiday.rate)}</div>
            <p>${renderPrice(holiday.price)}</p>
        </div>
    </div>
    `

}