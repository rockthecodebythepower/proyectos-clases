import {useState} from "react";

const Title = () => {
	const [text, setText] = useState("Este es el título");

	const handleText = () => {
		setText("Ahora ha cambiado el titulo");
	};

	return (
		<>
			<h1>{text}</h1>
			<button onClick={handleText}>Change text</button>
		</>
	);
};

export default Title;
