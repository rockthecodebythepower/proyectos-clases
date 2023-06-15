import "./Footer.css";
import { useState, useEffect } from "react";

const Footer = () => {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  const generateTime = () => {
    setInterval(() => {
      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();
      const formattedTime = `${hours}:${minutes}:${seconds}`;
      setTime(formattedTime);
    }, 1000);
  };

  const generateDate = () => {
    const date = new Date(Date.now());
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const dateText = date.toLocaleString(navigator.language, options);
    setDate(dateText);
  };

  useEffect(() => {
    generateTime();
    generateDate();
  }, []);

  return (
    <footer>
      <p>{time}</p>
      <p>{date}</p>
    </footer>
  );
};

export default Footer;
