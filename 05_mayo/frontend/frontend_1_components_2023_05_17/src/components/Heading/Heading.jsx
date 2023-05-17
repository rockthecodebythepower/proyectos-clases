import "./Heading.css";

const Heading = ({
	children,
	type,
	color,
	size,
	align,
	blink,
	underline,
	textcase,
}) => {
	const style = {
		color: color ? color : "var(--secondary)",
		fontSize:
			size === "xl"
				? "2rem"
				: size === "lg"
				? "1.5rem"
				: size === "md"
				? "1rem"
				: size === "sm"
				? "0.5rem"
				: "1.5rem",
		textAlign:
			align === "left"
				? "left"
				: align === "right"
				? "right"
				: align === "center"
				? "center"
				: "left",
		animation: blink ? "blink 2s infinite" : "none",
		textDecoration: underline ? "underline" : "none",
		textTransform:
			textcase === "uppercase"
				? "uppercase"
				: textcase === "lowercase"
				? "lowercase"
				: textcase === "capitalize"
				? "capitalize"
				: "none",
	};

	switch (type) {
		case "h1":
			return <h1 style={style}>{children}</h1>;
		case "h2":
			return <h2 style={style}>{children}</h2>;
		case "h3":
			return <h3 style={style}>{children}</h3>;
		case "h4":
			return <h4 style={style}>{children}</h4>;
		case "h5":
			return <h5 style={style}>{children}</h5>;
		case "h6":
			return <h6 style={style}>{children}</h6>;
		default:
			return <h1 style={style}>{children}</h1>;
	}
};

export default Heading;
