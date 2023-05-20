import "./App.css";
import MainLayout from "./layout/MainLayout";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {Outlet} from "react-router-dom";

const App = () => {
	return (
		<MainLayout>
			<Header />
			<Outlet />
			<Footer />
		</MainLayout>
	);
};

export default App;
