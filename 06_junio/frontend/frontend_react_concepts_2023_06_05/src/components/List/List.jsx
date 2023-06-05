const List = () => {
	const alimentos = [
		{
			id: 1,
			name: "Coca Cola",
			price: 2,
		},
		{
			id: 2,
			name: "Pan",
			price: 1,
		},
		{
			id: 3,
			name: "Agua",
			price: 0.5,
		},
	];

	return (
		<ul>
			{alimentos.map((alimento) => (
				<li key={alimento.id}>
					{alimento.name} - {alimento.price}
				</li>
			))}
		</ul>
	);
};

export default List;
