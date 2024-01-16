import { useNavigate } from "react-router-dom";
import "./Home.css";
import { useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    /* setTimeout(() => {
      navigate("/house");
    }, 30000); */
    navigate("/house");
  }, []);

  return (
    <div className="home">
      <p>Esta es la casa encantada, antes, vivía un señor muy arisco. </p>
      <p>
        A veces, estaba asomado a la ventana del desván y te miraba con ira.
      </p>
      <p>A todo el vecindario, le daba repelús y miedo</p>
      <p>
        Hace un año el viejo Luca Giro falleció entre terribles sufrimientos
      </p>
      <p>
        Hoy, te has enterado por chismes en el vecindario que había una caja
        fuerte en el desván.
      </p>
      <p>Donde dicen escondía una riqueza inconmensurable</p>
      <p>Como eres Front-end developer Junior y no tienes ni para comer.</p>
      <p>
        Sientes la necesidad de adentrarte en la casa en busca de la riqueza...
      </p>
    </div>
  );
};

export default Home;
