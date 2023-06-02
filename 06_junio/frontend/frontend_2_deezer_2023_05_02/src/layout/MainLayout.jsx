import "./MainLayout.css";
import {DataContext} from "../contexts/DataContext";
import {useContext} from "react";

const MainLayout = ({children}) => {
	const {theme} = useContext(DataContext);
	return <div className={`main-layout ${theme}`}>{children}</div>;
};

export default MainLayout;
