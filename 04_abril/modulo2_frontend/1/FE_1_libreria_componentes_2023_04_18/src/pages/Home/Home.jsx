import Alert from "../../components/Alert/Alert";
import Button from "../../components/Button/Button";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Alert state="warning" title="Completa el formulario" icon canClose>
        No puedes continuar sin haber completado el formulario previamente
      </Alert>
    </div>
  );
};

export default Home;
