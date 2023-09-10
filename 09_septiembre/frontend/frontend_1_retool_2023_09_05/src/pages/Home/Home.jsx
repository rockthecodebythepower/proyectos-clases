import { useNavigate } from "react-router-dom";
import "./Home.css"
import { useEffect } from "react";

const Home = ({ user }) => {

    console.log(user); // primera carga si no hay usuario dará undefined

    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            if (user.rol === "admin") {
                navigate("/retool")
            } else {
                navigate("/projects")
            }
        } else {
            navigate("/login")
        }
    }, [])
    

  return (
    <>
        
    </>
  )
}

export default Home