import "./App.css";
import {useState, useEffect} from "react";
import MainLayout from "./layout/MainLayout";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import {searchPhotos} from "./utils/utils";

const App = () => {
	const [keyword, setKeyword] = useState("Tokyo");
	const [photos, setPhotos] = useState([]);

	const getPhotos = async (keyword) => {
		const photos = await searchPhotos(keyword);
		setPhotos(photos.response.results);
	};

	useEffect(() => {
		getPhotos(keyword);
	}, []);

	return (
		<MainLayout>
			<Header setKeyword={setKeyword} getPhotos={getPhotos} keyword={keyword} />
			<Main keyword={keyword} photos={photos} />
			<Footer />
		</MainLayout>
	);
};

export default App;
