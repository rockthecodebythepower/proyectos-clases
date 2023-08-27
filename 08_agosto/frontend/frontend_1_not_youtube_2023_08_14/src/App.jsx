import { useEffect, useState } from "react";
import "./App.css";
import { videos } from "./data/videos";
import Video from "./components/Video/Video";

function App() {
  /* let modo = "dark"; */
  const [modo, setModo] = useState("dark");
  const [ytVideos, setYtVideos] = useState();

  const cambiarModo = () => {
    modo === "dark" ? setModo("light") : setModo("dark");
  };

  useEffect(() => {
    setTimeout(() => {
      setYtVideos([...videos]);
    }, 5000);
  }, []);

  return (
    <div id="main" className={modo}>
      <img
        className="modo"
        src={modo === "light" ? "/assets/luna.png" : "/assets/sol.png"}
        onClick={cambiarModo}
      />
      {ytVideos ? (
        <div className="videos">
          {ytVideos.map((video) => <Video key={video.id} videoData={video}/>)}
        </div>
      ) : (
        <img src="https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!sw800" className="caracol"/>
      )}
    </div>
  );
}

export default App;
