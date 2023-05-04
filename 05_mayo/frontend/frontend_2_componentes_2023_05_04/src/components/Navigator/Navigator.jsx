import "./Navigator.css";

const Navigator = ({links}) => {
	return (
		<nav>
			<ul>
				{links.map((link) => (
					<li key={link.link}>
						<a href={link.link}>{link.name}</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navigator;
