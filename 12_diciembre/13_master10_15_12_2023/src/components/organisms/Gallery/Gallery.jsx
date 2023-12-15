import { homeImages } from "../../../utils/data/homeImages/homeImages";
import Flex from "../../atoms/Flex/Flex";
import GalleryFlipCard from "../GalleryFlipCard/GalleryFlipCard";
import "./Gallery.css";

const Gallery = () => {
  return (
    <div className="gallery">
      <Flex flexStyles={{ gap: "var(--master-gap-m)" }}>
        {homeImages.map((image) => {
          return <GalleryFlipCard image={image} key={image.id} />;
        })}
      </Flex>
    </div>
  );
};

export default Gallery;