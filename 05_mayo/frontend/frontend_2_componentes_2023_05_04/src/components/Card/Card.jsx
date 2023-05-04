import "./Card.css";
import CardTitle from "../CardTitle/CardTitle";
import Description from "../Description/Description";

const Card = ({title, description}) => {
	return (
		<figure>
			<CardTitle text={title} />
			<Description text={description} />
		</figure>
	);
};

export default Card;
