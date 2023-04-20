import './Gallery.css';

import axios from 'axios';
import { useContext, useEffect, useState } from 'react';

import Card from '../../components/Card/Card';
import KeywordBtn from '../../components/KeywordBtn/KeywordBtn';
import ScrollBtn from '../../components/ScrollBtn/ScrollBtn';
import ShowMoreBtn from '../../components/ShowMoreBtn/ShowMoreBtn';
import Spinner from '../../components/Spinner/Spinner';
import { GlobalContext } from '../../context/GlobalContext';

const Gallery = () => {
  const { keyword, setKeyword } = useContext(GlobalContext);
  const [items, setItems] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [loaded, setLoaded] = useState(false);
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const keywords = [
    'characters',
    'creatures',
    'droids',
    'locations',
    'organizations',
    'species',
    'vehicles',
  ];

  const getItems = async () => {
    const res = await axios.get(
      `https://starwars-databank-server.vercel.app/api/v1/${keyword}?page=${pageNum}&limit=30`,
    );
    setItems([...items, ...res.data.data]);
    setLoaded(true);
  };

  const changeKeyword = (newKeyword) => {
    setLoaded(false);
    setItems([]);
    setKeyword(newKeyword);
    setPageNum(1);
  };

  const detectScrollHeight = () => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowScrollBtn(true);
      } else {
        setShowScrollBtn(false);
      }
    });
  };

  useEffect(() => {
    getItems();
    detectScrollHeight();
  }, [keyword, pageNum]);

  return (
    <main className="gallery">
      <nav>
        <ul className="gallery-btns">
          {keywords.map((k) => (
            <li key={k}>
              <KeywordBtn keyword={k} changeKeyword={changeKeyword} />
            </li>
          ))}
        </ul>
      </nav>
      <h2>
        {keyword}
        <span>{keyword}</span>
      </h2>
      {loaded ? (
        <>
          <ul className="card-gallery">
            {items.map((item) => (
              <Card key={item._id} item={item} />
            ))}
          </ul>
          <ShowMoreBtn pageNum={pageNum} setPageNum={setPageNum} />
          {showScrollBtn && <ScrollBtn />}
        </>
      ) : (
        <Spinner />
      )}
    </main>
  );
};

export default Gallery;
