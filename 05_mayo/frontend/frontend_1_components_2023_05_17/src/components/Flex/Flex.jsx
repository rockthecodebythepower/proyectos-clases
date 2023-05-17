const Flex = ({children, direction, justify, align, gap, wrap}) => {
	const style = {
		display: "flex",
		flexDirection:
			direction === "row" ? "row" : direction === "column" ? "column" : "row",
		justifyContent:
			justify === "center"
				? "center"
				: justify === "start"
				? "flex-start"
				: justify === "end"
				? "flex-end"
				: "flex-start",
		gap: gap ? gap : "none",
		alignItems:
			align === "center"
				? "center"
				: align === "start"
				? "flex-start"
				: align === "end"
				? "flex-end"
				: "flex-start",
		flexWrap: wrap ? "wrap" : "no-wrap",
	};

	return <div style={style}>{children}</div>;
};

export default Flex;
