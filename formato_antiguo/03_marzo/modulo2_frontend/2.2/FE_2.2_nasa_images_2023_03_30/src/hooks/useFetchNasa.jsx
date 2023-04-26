import { useState, useEffect } from "react";
import axios from "axios";
import { useDebounce } from "./useDebounce";

export const useFetchNasa = (keyword = "") => {
  const [images, setImages] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState("");
  const [debouncedValue] = useDebounce(keyword, 800);

  useEffect(() => {
    console.log(keyword);
    try {
      axios
        .get(`https://images-api.nasa.gov/search?q=${keyword}&media_type=image`)
        .then((res) => {
          setImages(res.data.collection.items);
          setLoaded(true);
        });
    } catch (error) {
      setError("Fetching data from NASA failed", error);
    }
  }, [debouncedValue]);

  return { images, loaded, error };
};
