const Card = ({article}) => {
  return (
    <article className="card">
      <h3>{article.name}</h3>
      <h4>{article.price} €</h4>
      <p># {article.id}</p>
      {article.type === "image" ? (
        <img src={article.media} alt="article preview" />
      ) : (
        <video controls src={article.media}></video>
      )}
    </article>
  )
}

export default Card
