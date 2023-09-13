import "./Nasa.css"
import { useState, useEffect } from "react";

function Nasa() {

    const newDate = new Date();

    const [img, setImg] = useState("");
    const [date, setDate] = useState(`${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()}`);
    const [loading, setLoading] = useState(false);

    const peticion = () => {
        setLoading(true);
        fetch(`https://api.nasa.gov/planetary/apod?api_key=ucz5qyG8PZOREzbaN4G9K2JbNc7Rvj0jh0m1fSOt&date=${date}`)
        .then((res) => res.json())
        .then((res) => { setImg(res.hdurl); setLoading(false) })
    }

    useEffect(() => {
        // ejecuta pero sólo la primera vez
        peticion();
    }, [date]);

    const calendarValue = (e) => {
        setDate(e.target.value);
    }

    return (
        <div>
            <h2>Soy la nasa</h2>
            {img && !loading && <img src={img} width="200px" height="200px" />}
            {loading && <img src="https://media3.giphy.com/media/MydKZ8HdiPWALc0Lqf/giphy.gif" width="200px" height="200px" />}
            <input type="date" onChange={calendarValue} />
        </div>
    )

}

export default Nasa;