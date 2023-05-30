import { tenis } from "../../data/data";
import ArticuloTenis from "../ArticuloTenis/ArticuloTenis";
import Section from "../Section/Section";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./Tenis.css";

function Tenis() {
  return (
    <Section id="tenis" titulo="Descubre los artículos de tenis">
      <div className="articulos">
        {tenis.map((element) => (
          <ArticuloTenis articulo={element} />
        ))}
      </div>
    </Section>
  );
}

export default Tenis;
