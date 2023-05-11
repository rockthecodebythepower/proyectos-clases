import "./App.css";
import MainLayout from "./layout/MainLayout/MainLayout";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

const App = () => {
	return (
		<MainLayout>
			<Header />
			<Main />
			<Footer />
		</MainLayout>
	);
};

export default App;
