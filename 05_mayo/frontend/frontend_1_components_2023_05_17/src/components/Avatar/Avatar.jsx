import "./Avatar.css";

const Avatar = ({src, alt, size, bordered, color}) => {
	const style = {
		height:
			size === "xl"
				? "200px"
				: size === "md"
				? "100px"
				: size === "sm"
				? "50px"
				: "100px",
		width:
			size === "xl"
				? "200px"
				: size === "md"
				? "100px"
				: size === "sm"
				? "50px"
				: "100px",
		overflow: "hidden",
		borderRadius: "50%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		border: bordered ? "2px solid var(--secondary)" : "none",
		fontSize: "200%",
		backgroundColor: color ? color : "transparent",
	};

	const createInitials = (alt) => {
		const splittedAlt = alt.split(" ");
		if (splittedAlt.length > 1) {
			return `${splittedAlt[0][0]}${splittedAlt[1][0]}`;
		} else {
			return `${splittedAlt[0][0]}`;
		}
	};

	return (
		<div style={style} className="avatar">
			{src ? <img src={src} alt={alt} /> : <h4>{createInitials(alt)}</h4>}
		</div>
	);
};

export default Avatar;
