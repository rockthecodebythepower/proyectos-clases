import "./Presentation.css";
import { Span } from "../Span/Span";
import { Button } from "../Button/Button";

export const Presentation = () => {
  return `
    <div class="presentation">
        <div class="presentation-text">
            <h1>Get started your exciting ${Span("journey")}
            with us.
            </h1>
            <p>A Team of experienced tourism professionals will provide you with the best advice and tips for your desire place.</p>
            ${Button("medium", "Discover Now")}
        </div>
        <div class="presentation-img">
            <img src="/assets/presentation.png" alt="presentation"/>
        </div>
    </div>
    `;
};
