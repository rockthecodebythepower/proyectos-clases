import "./GalleryFlipCard.css";
import FlipCardBack from "../../molecules/FlipCardBack/FlipCardBack";
import FlipCardFront from "../../molecules/FlipCardFront/FlipCardFront";
import ImgWrp from "../../molecules/ImgWrp/ImgWrp";
import FlipCard from "../FlipCard/FlipCard";

const GalleryFlipCard = ({ image }) => {
  return (
    <FlipCard>
      <FlipCardFront>
        <ImgWrp
          className="flip-card-front"
          alt={image.alt}
          src={image.src}
          imageStyles={{ objectFit: "cover" }}
        />
      </FlipCardFront>
      <FlipCardBack>
        <ImgWrp
          className="flip-card-icon"
          alt={image.icon.alt}
          src={image.icon.src}
          imageStyles={{ objectFit: "cover", filter: "invert(1)" }}
        />
        <p>{image.description}</p>
      </FlipCardBack>
    </FlipCard>
  );
};

export default GalleryFlipCard;