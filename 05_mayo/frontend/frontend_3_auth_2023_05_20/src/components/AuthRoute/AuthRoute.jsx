import {useContext} from "react";
import {UserContext} from "../../context/userContext";
import {Navigate} from "react-router-dom";

const AuthRoute = ({children}) => {
	const {userLogged} = useContext(UserContext);

	if (userLogged) {
		return children;
	} else {
		return <Navigate to="/login" />;
	}
};

export default AuthRoute;
