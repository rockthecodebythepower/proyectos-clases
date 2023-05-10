import { Navigate } from "react-router-dom";

const RequireAuth = ({children, adminAccess}) => {

    const user = JSON.parse(localStorage.getItem("user"))

    if (!user) {
        return <Navigate to="/login"/>
    } 

    if (adminAccess && user.rol !== "admin") {
        console.log("Yeti entra aquí");
        return <Navigate to="/"/>
    }

  return children
}

export default RequireAuth