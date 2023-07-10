import { holidays } from "../../data/data";
import { printHoliday } from "../Holiday/Holiday";
import "./Holidays.css";

export const renderHolidays = (vacaciones = holidays) => {

    console.log(vacaciones);

    const wrp$$ = document.querySelector("#wrp");

    wrp$$.innerHTML = `
        <section id="holidays">
            <h1>Mis vacaciones</h1>
            <div class="holidays-container">
                ${vacaciones.map((holiday) => printHoliday(holiday)).toString().replaceAll(",", "")}
            </div>
        </section>
    `

}