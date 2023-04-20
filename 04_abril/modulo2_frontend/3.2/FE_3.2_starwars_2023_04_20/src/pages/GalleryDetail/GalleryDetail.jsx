import './GalleryDetail.css';

import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import DetailCard from '../../components/DetailCard/DetailCard';
import Spinner from '../../components/Spinner/Spinner';
import { GlobalContext } from '../../context/GlobalContext';

const GalleryDetail = () => {
  const { keyword } = useContext(GlobalContext);
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loaded, setLoaded] = useState(false);

  const getItem = async () => {
    setLoaded(false);
    const res = await axios.get(
      `https://starwars-databank-server.vercel.app/api/v1/${keyword}/${id}`,
    );
    setItem(res.data);
    setLoaded(true);
  };

  useEffect(() => {
    getItem();
  }, []);

  return (
    <main className="gallery-detail">
      {loaded ? <DetailCard item={item} /> : <Spinner />}
    </main>
  );
};

export default GalleryDetail;
