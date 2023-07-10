import { renderPlaces } from "../Place/Place";
import "./Holidays.css";

export const renderHolidays = () => {

    const main$$ = document.querySelector("main");

    main$$.innerHTML = `
        <section>
            <h1>Lugares Vacacionales</h1>
            <div id="lugares">
                ${renderPlaces()}
            </div>
        </section>
    `

}