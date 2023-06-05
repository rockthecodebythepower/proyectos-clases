import "./Image.css";

const Image = ({source, alternative}) => {
	return <img src={source} alt={alternative} />;
};

export default Image;
