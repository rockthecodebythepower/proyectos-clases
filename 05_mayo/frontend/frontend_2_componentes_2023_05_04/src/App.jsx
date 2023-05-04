import "./App.css";
import GlobalLayout from "./layout/GlobalLayout/GlobalLayout";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

const App = () => {
	return (
		<GlobalLayout>
			<Header />
			<Main />
			<Footer />
		</GlobalLayout>
	);
};

export default App;
