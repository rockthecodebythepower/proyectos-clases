import "./Hero.css";
import preview from "../../assets/hero.svg";

const Hero = () => {
	const info = {
		title: "Curated colors in context.",
		detail:
			"Not sure what colors to use in your designs or where to use them? Happy Hues is a color palette inspiration site that acts as a real world example as to how the colors could be used in your design projects.",
	};

	const sayHello = (ev) => {
		console.log("Hola", ev);
	};

	return (
		<section className="hero">
			<div>
				<h2>{info.title}</h2>
				<p>{info.detail}</p>
				<button onClick={sayHello}>Click</button>
			</div>
			<img src={preview} alt="Happy Hues preview" />
		</section>
	);
};

export default Hero;
