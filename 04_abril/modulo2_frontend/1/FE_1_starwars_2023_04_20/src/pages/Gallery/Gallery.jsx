import './Gallery.css';

import Card from '../../components/Card/Card';

const Gallery = () => {
  return (
    <main className="gallery">
      <nav>
        <ul className="gallery-btns">
          <li>
            <button>Characters</button>
          </li>
          <li>
            <button>Creatures</button>
          </li>
          <li>
            <button>Droids</button>
          </li>
          <li>
            <button>Locations</button>
          </li>
          <li>
            <button>Organizations</button>
          </li>
          <li>
            <button>Species</button>
          </li>
          <li>
            <button>Vehicles</button>
          </li>
        </ul>
      </nav>
      <ul className="card-gallery">
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
      </ul>
    </main>
  );
};

export default Gallery;
