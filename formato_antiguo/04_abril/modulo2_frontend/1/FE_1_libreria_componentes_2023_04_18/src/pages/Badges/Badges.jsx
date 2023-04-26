import React from "react";
import "./Badges.css";
import Badge from "../../components/Badge/Badge";

const Badges = () => {
  return (
    <div className="badges">
      <div className="badges_tamaños">
        <h2>Tamaños</h2>
        <div>
          <div>
            <p>Small</p>
            <Badge size="s">pequeño</Badge>
          </div>
          <div>
            <p>Medium</p>
            <Badge size="m">mediano</Badge>
          </div>
          <div>
            <p>Large</p>
            <Badge size="l">grande</Badge>
          </div>
        </div>
      </div>
      <div className="badges_states">
        <h2>Estados</h2>
        <div>
            <Badge>Default</Badge>
            <Badge state="warning">warning</Badge>
            <Badge state="error">error</Badge>
            <Badge state="info">info</Badge>
            <Badge state="success">success</Badge>
            <Badge state="oferta">oferta</Badge>
            <Badge state="agotado">agotado</Badge>
        </div>
      </div>
    </div>
  );
};

export default Badges;
