import "./Servicios.css";

const Servicios = ({ servicios }) => {
  return (
    <div className="servicios">
      {servicios.map((servicio) => {
        return <p key={servicio}>{servicio}</p>;
      })}
    </div>
  );
};

export default Servicios;
