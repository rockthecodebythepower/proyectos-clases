import { useContext } from "react";
import { userContext } from "../../providers/UserProvider";
import "./Home.css";

const Home = () => {
  //! PASAR PROPS DE UN COMPONENTE A OTRO, QUE NO LAS VA A UTILIZAR MÁS QUE PARA ENVIARLAS AÚN MÁS ABAJO SE LLAMA PROP DRILLING

  const { user } = useContext(userContext);

  return (
    <div>
      <Componente>
        <Componente>
          La página Home la está visualizando el usuario: {user?.userName}
        </Componente>
      </Componente>
    </div>
  );
};

export default Home;
