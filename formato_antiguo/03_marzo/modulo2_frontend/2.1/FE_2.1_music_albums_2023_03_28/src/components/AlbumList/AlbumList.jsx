import "./AlbumList.css";
import { albumsData } from "../../data/data";
import AlbumCard from "../AlbumCard/AlbumCard";
import SectionTitle from "../SectionTitle/SectionTitle";
import { useMemo, useState } from "react";
import Input from "../Input/Input";
import { useDebounce } from "use-debounce";
//import useDebounce from "../../hooks/useDebounce";

const AlbumList = () => {
  const [keyword, setKeyword] = useState("");
  //Con useDebounce vamos a setear keyword a través de value con 1 segundo y medio de retardo
  const [debouncedKeyword] = useDebounce(keyword, 1000);
  const filteredAlbums = useMemo(() => {
    console.log("Calculando filtrado de albums");
    return albumsData.filter(
      (album) =>
        album.name.toLowerCase().includes(keyword) ||
        album.artist.toLowerCase().includes(keyword) ||
        album.year == keyword
    );
    //Vuelve a calcular los albums filtrados si albumsData o keyword cambia de estado
  }, [albumsData, debouncedKeyword]);

  const handleChange = (ev) => {
    setKeyword(ev.target.value.toLowerCase());
  };

  return (
    <section>
      <SectionTitle text="Our album collection" />
      <Input handleChange={handleChange} />
      <ul className="albumlist">
        {filteredAlbums.length ? (
          filteredAlbums.map((album) => (
            <AlbumCard key={JSON.stringify(album)} album={album} />
          ))
        ) : (
          <h3>No albums</h3>
        )}
      </ul>
    </section>
  );
};

export default AlbumList;
