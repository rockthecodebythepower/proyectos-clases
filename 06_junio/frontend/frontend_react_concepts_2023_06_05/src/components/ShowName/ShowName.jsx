import {useState, useEffect} from "react";

const ShowName = () => {
	const [name, setName] = useState("Alberto");
	const [inputValue, setInputValue] = useState("");

	useEffect(() => {
		setName(inputValue);
	}, [inputValue]);

	return (
		<>
			<h3>{name}</h3>
			<input type="text" onInput={(ev) => setInputValue(ev.target.value)} />
		</>
	);
};

export default ShowName;
