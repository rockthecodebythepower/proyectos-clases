import "./Input.css";

export const Input = () => {
	const input = document.createElement("input");
	input.type = "email";
	input.placeholder = "Email";
	return input;
};
