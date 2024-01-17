import "./PintarNumero.css";

const PintarNumero = ({ numero }) => {

    console.log("Soy PintarNumero y me renderizo");

  return <div className="numerito">{numero}</div>;
};

export default PintarNumero;
