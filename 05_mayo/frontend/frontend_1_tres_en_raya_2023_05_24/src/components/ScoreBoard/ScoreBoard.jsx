import { useEffect, useState } from "react";
import "./ScoreBoard.css";

const ScoreBoard = ({ token }) => {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    if (token) {
      fetch("http://localhost:3000/api/v1", {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((respuesta) => respuesta.json())
        .then((res) => setAllUsers(res));
    }
  }, []);

  return (
    <div>
      {allUsers.map((user) => {
        return (
          <div>
            <h3>{user.userName}</h3>
            <p>{user.puntuacion}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ScoreBoard;
