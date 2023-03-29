import "./Main.css";
import { useState, useEffect } from "react";
import PhotoCard from "../PhotoCard/PhotoCard";
import Loader from "../Loader/Loader";

const Main = () => {
  const [photos, setPhotos] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const getPhotos = async () => {
    const res = await fetch("https://picsum.photos/v2/list");
    const data = await res.json();
    setPhotos(data);
    setLoaded(true);
  };

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <main>
      <h2>Random Photos</h2>
      <ul>
        {loaded ? (
          photos.map((photo) => <PhotoCard photo={photo} key={photo.id} />)
        ) : (
          <Loader />
        )}
      </ul>
    </main>
  );
};

export default Main;
