import { useState, useEffect } from "react";
import "./GetShows.scss";
import { iShow } from "../../interfaces/iShow";

const GetShows = () => {

 /*  const [shows, setShows] = useState<iShow[]>([]); */
 const [shows, setShows] = useState([]);

  const getShowsApi = async () => {
    const result =  await fetch("https://video-club-back.vercel.app/api/v1/entertainments");
    const res = await result.json();
    setShows(res);
  }

  /* const getShowsApi = async ():Promise<void> => {
    const result =  await fetch("https://video-club-back.vercel.app/api/v1/entertainments");
    const res:iShow[] = await result.json();
    setShows(res);
  } */

  useEffect(() => {
    getShowsApi();
  }, []);
  /* [] -> array de dependencias y está vacío por lo tanto no depende de nada para volver a ejecutar el código que tiene dentro */
  
  return (
    <>
      <h1>Las mejores series y películas</h1>
      <div className="shows">
        {shows.map((show) => {
          return (
            <div key={show._id} className="show">
              <h2>{show.title}</h2>
              <img src={show.portrait}/>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default GetShows