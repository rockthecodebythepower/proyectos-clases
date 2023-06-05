import "./App.css";
import Title from "./components/Title/Title";
import Subtitle from "./components/Subtitle/Subtitle";
import Flex from "./components/Flex/Flex";
import Image from "./components/Image/Image";
import Gallery from "./components/Gallery/Gallery";
import List from "./components/List/List";
import ShowName from "./components/ShowName/ShowName";

function App() {
	return (
		<>
			<ShowName />
			<Title />
			<List />
			<Subtitle>Estos son los children</Subtitle>
			<Flex>
				<h4>Hola</h4>
				<h4>Esto es flexible</h4>
				<h4>Somos los children de Flex</h4>
			</Flex>
			<Gallery>
				<Image
					source="https://fastly.picsum.photos/id/730/200/300.jpg?hmac=Xa_29B3ZIok8lz4JGLZUBU_ARxJew0twrMWMHEy_T1I"
					alternative="Bosque nevado"
				/>
				<Image
					source="https://images.unsplash.com/flagged/1/apple-gear-looking-pretty.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
					alternative="Ordenador portatil"
				/>
				<Image
					source="https://fastly.picsum.photos/id/730/200/300.jpg?hmac=Xa_29B3ZIok8lz4JGLZUBU_ARxJew0twrMWMHEy_T1I"
					alternative="Bosque nevado"
				/>
				<Image
					source="https://images.unsplash.com/flagged/1/apple-gear-looking-pretty.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
					alternative="Ordenador portatil"
				/>
			</Gallery>
		</>
	);
}

export default App;
