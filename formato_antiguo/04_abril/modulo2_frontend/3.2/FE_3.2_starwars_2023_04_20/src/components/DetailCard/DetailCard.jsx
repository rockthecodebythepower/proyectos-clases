import './DetailCard.css';

const DetailCard = ({ item }) => {
  return (
    <figure className="detail-card">
      <img src={item.image} alt={item.name} />
      <figcaption>
        <h2>
          {item.name}
          <span>{item.name}</span>
        </h2>
        <p>{item.description}</p>
      </figcaption>
    </figure>
  );
};

export default DetailCard;
