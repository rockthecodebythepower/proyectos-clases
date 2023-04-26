import "./App.css"
import fulcrumImg from "./assets/cards/1.jpeg"
import republicImg from "./assets/cards/2.jpeg"
import creditImg from "./assets/cards/3.jpeg"
import racerImg from "./assets/cards/4.jpeg"
import droidImg from "./assets/cards/5.jpeg"
import blackSunImg from "./assets/cards/6.jpeg"
import royalImg from "./assets/cards/7.jpeg"
import bobaFettImg from "./assets/cards/8.jpeg"
import mandoImg from "./assets/cards/9.jpeg"
import oldRepublicImg from "./assets/cards/10.jpeg"
import CardWrapper from "./components/CardWrapper/CardWrapper"
import {v4 as uuid} from "uuid"
import {useState} from "react"
import Card from "./components/Card/Card"

//REGLAS DEL JUEGO
//- La primera carta carta elegida se pondrá boca-arriba
//- Cuando elijamos la segunda carta se gira y empieza la comparación:
//      -Si son iguales, se quedan boca-arriba
//      -Si son diferentes se vuelven a dar la vuelta

//Creamos nuestro array de imagenes con objetos
const images = [
  {alt: "Fulcrum", src: fulcrumImg},
  {alt: "Republic", src: republicImg},
  {alt: "Credit", src: creditImg},
  {alt: "Racer", src: racerImg},
  {alt: "Droid", src: droidImg},
  {alt: "Black Sun", src: blackSunImg},
  {alt: "Royal House", src: royalImg},
  {alt: "Boba Fett", src: bobaFettImg},
  {alt: "Mandalorian", src: mandoImg},
  {alt: "Old Republic", src: oldRepublicImg},
]

const App = () => {
  //Creamos objetos con las imagenes y un propiedad adicional booleana para saber si están volteadas o no, por defecto estará en false
  const cardsData = images.map((image) => ({image, isFlipped: false}))
  //Creamos los pares de cartas
  const pairedCards = [...cardsData, ...cardsData]
  //Barajamos o desordenamos las cartas
  const shuffledCards = pairedCards.sort(() => Math.random() - 0.5)

  //Creamos un estado inicial con la situación de arranque de las cartas
  const [cardsState, setCardsState] = useState(shuffledCards)
  //Creamos un estado donde almacenar las cartas seleccionadas por el jugador
  const [selectedCards, setSelectedCards] = useState([])
  //Creamos un estado para bloquear las cartas
  const [isLocked, setIsLocked] = useState(false)
  //Creamos un estado donde mostrar los mensajes del juego
  const [message, setMessage] = useState("")

  //Creamos la función que le de la vuelta a la carta y la modifique para cambiar su estado
  const flipCard = (index) => {
    //Si esta bloqueado, nos salimos de la función
    if (isLocked) {
      return
    }
    //Si no hay cartas seleccionadas -> Seteamos la primera carta que pulsemos
    //Con esto estamos diferenciando donde meter la carta, si es la primera que pulsamos se va a colocar la primera y si no no
    if (selectedCards.length === 0) {
      setMessage("")
      setSelectedCards([index])
    } else {
      //Si la primera carta seleccionada está ya seleccionada, no hacemos nada
      setMessage("")
      if (selectedCards[0] === index) {
        setMessage("Selecciona una carta diferente")
        return
        //Si el src de la primera carta seleccionada coincide con un src de la baraja
      } else if (
        cardsState[selectedCards[0]].image.src === cardsState[index].image.src
      ) {
        const nextCardsState = cardsState.map((card) => ({...card}))
        //En nuestro nuevo estado con una copia para perder las referencias y que se giren individualmente, cambiamos la propiedad isFlipped por true
        nextCardsState[index].isFlipped = true
        //Tambien cambiamos la carta seleccionada a true
        nextCardsState[selectedCards[0]].isFlipped = true
        //Cambiamos el estado de las cartas a las actuales
        setCardsState(nextCardsState)
        //Vaciamos la mano del jugador
        setSelectedCards([])
        //Si no hay coincidencia
        setTimeout(() => {
          const filterCards = nextCardsState.filter(
            (card) => card.isFlipped === false
          )
          if (filterCards.length === 0) {
            setMessage("¡HAS GANADO!")
          }
        }, 2000)
      } else {
        //Seteamos las dos cartas en la mano del jugador
        setSelectedCards([selectedCards[0], index])
        //Bloqueamos el juego
        setIsLocked(true)
        //Dejamos que por un segundo el usuario vea lo que ha hecho...
        const lockedInterval = setInterval(() => {
          setSelectedCards([])
          setIsLocked(false)
          //Seteamos la mano vacia, el bloqueo a false y rompemos el intervalo de medio segundo
          clearInterval(lockedInterval)
        }, 500)
      }
    }
  }

  return (
    <>
      <h2>{message}</h2>
      {message === "¡HAS GANADO!" && (
        <button
          onClick={() => {
            setCardsState(shuffledCards)
            setMessage("")
          }}
        >
          Reset
        </button>
      )}
      <CardWrapper>
        {/* Utilizamos uuid para generar claves únicas ya que no tenemos ids y estamos repitiendo los objetos */}
        {cardsState.map((cardData, index) => (
          <Card
            image={cardData.image}
            isFlipped={cardData.isFlipped || selectedCards.includes(index)}
            flipCard={() => flipCard(index)}
            key={uuid()}
          />
        ))}
      </CardWrapper>
    </>
  )
}

export default App
