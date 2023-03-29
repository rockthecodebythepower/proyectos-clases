import "./PhotoCard.css";

const PhotoCard = ({ photo }) => {
  if (photo) {
    return (
      <li className="photocard">
        <img src={photo.download_url} alt={photo.author} />
        <p>{photo.author}</p>
        <a href={photo.url}>Source 🔗</a>
      </li>
    );
  }
};

export default PhotoCard;
