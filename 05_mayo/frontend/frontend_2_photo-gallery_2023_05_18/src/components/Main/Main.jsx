import "./Main.css";
import GalleryLayout from "../../layout/GalleryLayout";

const Main = ({keyword, photos}) => {
	return (
		<main>
			<h2>{keyword}</h2>
			<GalleryLayout>
				{photos.map((photo) => (
					<img
						src={photo.urls.regular}
						alt={photo.alt_description}
						key={photo.id}
					/>
				))}
			</GalleryLayout>
		</main>
	);
};

export default Main;
