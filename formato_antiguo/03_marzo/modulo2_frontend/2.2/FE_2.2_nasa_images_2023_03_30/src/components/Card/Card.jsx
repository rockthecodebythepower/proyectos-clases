import "./Card.css";

const Card = ({ img }) => {
  const parseDate = (datestring) => {
    const date = new Date(datestring);
    return date.toLocaleDateString("en-EN", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <li className="card">
      <figure>
        <img src={img.links[0].href} alt={img.data[0].title} />
        <h3>{img.data[0].title}</h3>
        <h3>{parseDate(img.data[0].date_created)}</h3>
      </figure>
    </li>
  );
};

export default Card;
