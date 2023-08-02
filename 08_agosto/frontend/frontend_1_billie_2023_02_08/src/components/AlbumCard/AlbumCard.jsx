import "./AlbumCard.css";

const AlbumCard = ({ album }) => {
  return (
    <li className="albumcard">
      <img src={album.cover} alt={album.name} />
      <div>
        <h3>{album.name}</h3>
        <p>{album.label}</p>
        <p>{album.format}</p>
        <p>{album.year}</p>
      </div>
    </li>
  );
};

export default AlbumCard;
