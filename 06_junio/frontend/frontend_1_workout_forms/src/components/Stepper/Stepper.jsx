import { useState } from "react";
import FinalStep from "../FinalStep/FinalStep";
import Form1 from "../Form1/Form1";
import Form2 from "../Form2/Form2";
import Form3 from "../Form3/Form3";
import "./Stepper.css";

const USER_OPTIONS = {
  peso: null,
  altura: null,
  objetivo: "perder peso",
  edad: null,
  nivel: "principiante",
};

const Stepper = () => {

  /* el estado que controla el paso que estamos viendo */
  const [step, setStep] = useState(1);

  /* el estado que controla los datos que el usuario va introduciendo en nuestra aplicación */
  const [userData, setUserData] = useState(USER_OPTIONS);

  return (
    <div className="stepper">
      {step > 1 ? (
        <img
          src="/assets/izquierda.svg"
          className="flecha"
          onClick={() => setStep(step - 1)}
        />
      ) : (
        <div></div>
      )}

      {step === 1 && <Form1 userData={userData} setUserData={setUserData}/>}

      {step === 2 && <Form2 userData={userData} setUserData={setUserData}/>}

      {step === 3 && <Form3 userData={userData} setUserData={setUserData}/>}

      {step === 4 && <FinalStep userData={userData}/>}

      {step < 4 && !Object.values(userData).includes(null) ? (
        <img
          src="/assets/derecha.svg"
          className="flecha"
          onClick={() => setStep(step + 1)}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Stepper;
