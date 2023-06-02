import {useState, useEffect, useContext} from "react";
import {DataContext} from "../../contexts/DataContext";
import "./Main.css";

const Main = () => {
	const {keyword} = useContext(DataContext);
	const [info, setInfo] = useState([]);
	const [topSongs, setTopSongs] = useState([]);
	const [loaded, setLoaded] = useState(false);

	const getArtist = async () => {
		setLoaded(false);
		const data = await fetch(
			`https://api.deezer.com/search?q=artist:"${keyword}"`
		);
		const dataJSON = await data.json();
		setInfo(dataJSON.data);
		setLoaded(true);
	};

	useEffect(() => {
		getArtist();
	}, [keyword]);

	return (
		<main>
			{loaded ? (
				<>
					<section className="artist-info">
						<h2>{info[0].artist.name}</h2>
						<img src={info[0].artist.picture_big} alt={info[0].artist.name} />
					</section>
					<h2>Albums</h2>
					<section className="artist-albums">
						<ul>
							{info.map((item) => (
								<li key={item.id}>
									<h3>{item.title}</h3>
									<h4>{item.duration} min.</h4>
									<img src={item.album.cover_big} alt={item.title} />
									<audio src={item.preview} controls>
										Your browser does not support the <code>audio</code>{" "}
										element.
									</audio>
								</li>
							))}
						</ul>
					</section>
				</>
			) : (
				<h2>Loading...</h2>
			)}
		</main>
	);
};

export default Main;
