import "./Docs.css";
import {useContext} from "react";
import {UserContext} from "../../context/userContext";
import {Navigate} from "react-router-dom";

const Docs = () => {
	const {user} = useContext(UserContext);
	return <main>{user !== null ? <h2>Docs</h2> : <Navigate to="/" />}</main>;
};

export default Docs;
