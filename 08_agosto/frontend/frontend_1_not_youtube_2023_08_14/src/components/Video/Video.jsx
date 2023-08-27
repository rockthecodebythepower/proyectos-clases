import "./Video.css";

//! el único deber de este componente es que le llega un video y se encarga de pintarlo

const Video = ({ videoData }) => {

    const fecha = new Date();
    const fechaVideo = new Date(videoData.fecha);
    let formato = "días"

    let diasDeDiferencia = Math.floor(((fecha.getTime() - fechaVideo.getTime()) / 1000) / 86400);

    if (diasDeDiferencia < 1) {

        diasDeDiferencia = Math.floor((((fecha.getTime() - fechaVideo.getTime()) / 1000) % 86400) / 3600);

        diasDeDiferencia === 1 ? formato = "hora" : formato = "horas"

        if (diasDeDiferencia < 1) {
            diasDeDiferencia = Math.floor(((((fecha.getTime() - fechaVideo.getTime()) / 1000) % 86400) % 3600) / 60);

            diasDeDiferencia === 1 ? formato = "minuto" : formato = "minutos"
        }
    }

  return (
    <div className="video">
      <div className="miniatura">
        <img src={videoData.miniatura} />
      </div>
      <div className="datos">
        <div className="perfil">
          <img src={videoData.miniatura} />
        </div>
        <div className="info">
          <h3>{videoData.titulo}</h3>
          <p>{videoData.canal}</p>
          <p>{videoData.visualizaciones} visualizaciones · hace {Math.floor(diasDeDiferencia)} {formato}</p>
        </div>
      </div>
    </div>
  );
};

export default Video;
