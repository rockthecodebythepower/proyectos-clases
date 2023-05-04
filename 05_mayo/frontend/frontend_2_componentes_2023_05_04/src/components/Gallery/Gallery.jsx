import "./Gallery.css";
import Card from "../Card/Card";
import GalleryLayout from "../../layout/GalleryLayout/GalleryLayout";
import {articles} from "../../data/data";

const Gallery = () => {
	return (
		<GalleryLayout>
			{articles.map((item) => (
				<li key={item.id}>
					<Card title={item.title} description={item.description} />
				</li>
			))}
		</GalleryLayout>
	);
};

export default Gallery;
