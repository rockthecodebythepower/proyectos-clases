import { useState } from "react";
import Presentation from "../Presentation/Presentation";
import "./Main.css";
import Vision from "../Vision/Vision";

const Main = () => {

  return (
    <main>
      <Presentation
        slogan="YOUR VISION, OUR MISSION, MUTUAL GROWTH"
        title="An Ideas For"
        title2="Better Advice"
        img="/assets/paisano.png"
        buttonText="LEARN MORE"
        direction="right"
      />
      <Vision/>
      <Presentation
        slogan="ABOUT US"
        title="Giving Smartness"
        title2="To your Business"
        img="/assets/paisana.png"
        buttonText="EXPLORE ABOUT US"
        direction="left"
      />
    </main>
  );
};

export default Main;
