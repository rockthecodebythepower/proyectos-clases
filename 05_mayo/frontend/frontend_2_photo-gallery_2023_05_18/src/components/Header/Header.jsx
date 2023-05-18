import "./Header.css";

const Header = ({setKeyword, getPhotos, keyword}) => {
	return (
		<header>
			<h1>PhotoGallery</h1>
			<div>
				<input
					type="text"
					placeholder="Fotos, personas, temáticas..."
					onInput={(ev) => setKeyword(ev.target.value)}
				/>
				<button onClick={() => getPhotos(keyword)}>
					<span className="material-symbols-outlined">search</span>
				</button>
			</div>
		</header>
	);
};

export default Header;
