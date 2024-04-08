import { useContext } from "react";
import "./About.css";
import { userContext } from "../../providers/UserProvider";

const About = () => {

    const { user } = useContext(userContext);

  return (
    <div>La página About la está visualizando el usuario: {user?.userName}</div>
  );
};

export default About;
