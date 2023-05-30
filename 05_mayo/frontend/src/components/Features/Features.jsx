import "./Features.css";

const Features = () => {
	const colorConcepts = [
		{
			id: 1,
			name: "Red",
			description:
				"Red is a warm color that evokes passion and energy. It can also represent danger or warning.",
		},
		{
			id: 2,
			name: "Blue",
			description:
				"Blue is a cool color associated with calmness and tranquility. It can symbolize trust and stability.",
		},
		{
			id: 3,
			name: "Yellow",
			description:
				"Yellow is a bright and cheerful color that represents happiness and positive energy. It can convey optimism.",
		},
		{
			id: 4,
			name: "Green",
			description:
				"Green is the color of nature and is often associated with growth and freshness. It can also symbolize harmony and balance.",
		},
	];

	//Esta es la forma que nos recomienda la documentación oficial de React:
	/* 	const listItems = colorConcepts.map((item) => (
		<li>
			<h3>{item.name}</h3>
			<p>{item.description}</p>
		</li>
	));*/
	return (
		<section className="features">
			<ul>
				{colorConcepts.map((item) => (
					<li key={item.id}>
						<h3>{item.name}</h3>
						<p>{item.description}</p>
					</li>
				))}
			</ul>
		</section>
	);
};

export default Features;
