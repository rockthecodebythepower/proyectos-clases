import "./AlbumsSection.css";
import { albums } from "../../data/data";
import AlbumCard from "../AlbumCard/AlbumCard";

const AlbumsSection = () => {
  return (
    <section className="albums">
      <ul>
        {albums.map((album) => (
          <AlbumCard key={album.id} album={album} />
        ))}
      </ul>
    </section>
  );
};

export default AlbumsSection;
