import "./InfoSection.css";

import { useEffect, useState } from "react";
import InfoCard from "../InfoCard/InfoCard";

const InfoSection = () => {
  const [tracks, setTracks] = useState([]);

  const getInfo = async () => {
    const url = "https://api.deezer.com/artist/9635624/top?limit=50";

    try {
      const response = await fetch(url);
      const result = await response.json();
      setTracks(result.data);
      console.log(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <section className="info">
      {tracks.map((track) => (
        <InfoCard key={track.id} track={track} />
      ))}
    </section>
  );
};

export default InfoSection;
