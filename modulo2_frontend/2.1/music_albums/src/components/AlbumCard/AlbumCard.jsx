import "./AlbumCard.css";
import { memo } from "react";

//Memoizamos el componente AlbumCard para que no se re-renderice si el album que le pasamos sigue siendo el mismo
const AlbumCard = memo(({ album }) => {
  console.log(`Renderizando album: ${album.name}`);
  return (
    <li className="albumcard">
      <img src={album.cover} alt={album.name} />
      <h3>{album.name}</h3>
      <h4>{album.artist}</h4>
      <h5>{album.year}</h5>
    </li>
  );
});

export default AlbumCard;
