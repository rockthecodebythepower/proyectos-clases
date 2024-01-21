import { useEffect, useState } from "react";

export const useTime = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalo);
    };
  }, []);

  return {
    date,
  };
};
