import "./Card.css"
import cardBackImg from "../../assets/cards/back.png"
const Card = ({image, isFlipped, flipCard}) => {
  const display = isFlipped ? image : {alt: "Back Card", src: cardBackImg}

  return (
    <figure onClick={() => flipCard()}>
      <img src={display.src} alt={display.alt} />
    </figure>
  )
}

export default Card
