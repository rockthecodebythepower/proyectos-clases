import './Card.css';

import { NavLink } from 'react-router-dom';

const Card = ({ item }) => {
  return (
    <NavLink to={`/gallery/${item._id}`}>
      <figure className="card">
        <img src={item.image} alt={item.name} />
        <h4>{item.name}</h4>
      </figure>
    </NavLink>
  );
};

export default Card;
