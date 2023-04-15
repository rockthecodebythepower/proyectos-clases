import React from "react";
import Button from "../../components/Button/Button";
import "./Botones.css";

const Botones = () => {
  return (
    <div className="botones">
      <h1>Estos son nuestros botones</h1>
      <div className="emphasis">
        <h2>Emphasis</h2>
        <div className="emphasis_botones">
          <div>
            <p>High emphasis</p>
            <Button texto="Enviar" tipo="high" />
          </div>
          <div>
            <p>Medium emphasis</p>
            <Button texto="Enviar" tipo="medium" />
          </div>
          <div>
            <p>Low emphasis</p>
            <Button texto="Enviar" tipo="low" />
          </div>
        </div>
      </div>
      <div className="iconos">
        <h2>Iconos</h2>
        <div className="iconos_botones">
          <div>
            <p>No icons</p>
            <Button texto="Enviar" tipo="high" />
            <Button texto="Enviar" tipo="medium" />
            <Button texto="Enviar" tipo="low" />
          </div>
          <div>
            <p>Left icon</p>
            <Button texto="Enviar" tipo="high" leftIcon="/assets/Flechas.svg"/>
            <Button texto="Enviar" tipo="medium" leftIcon="/assets/Flechas.svg"/>
            <Button texto="Enviar" tipo="low" leftIcon="/assets/Flechas.svg"/>
          </div>
          <div>
            <p>Right icon</p>
            <Button texto="Enviar" tipo="high" rightIcon="/assets/Basura.svg"/>
            <Button texto="Enviar" tipo="medium" rightIcon="/assets/Basura.svg"/>
            <Button texto="Enviar" tipo="low" rightIcon="/assets/Basura.svg"/>
          </div>
        </div>
      </div>
      <div className="sizes">
        <h2>Tamaños</h2>
        <div className="sizes_botones">
          <div>
            <p>Small</p>
            <Button texto="Enviar" size="s"/>
          </div>
          <div>
            <p>Medium</p>
            <Button texto="Enviar" size="m" disabled/>
          </div>
          <div>
            <p>Large</p>
            <Button texto="Enviar" size="l"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Botones;
