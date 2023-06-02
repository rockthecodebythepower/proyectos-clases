import "./App.css";
import MainLayout from "./layout/MainLayout";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<MainLayout>
			<Header />
			<Main />
			<Footer />
		</MainLayout>
	);
}

export default App;
