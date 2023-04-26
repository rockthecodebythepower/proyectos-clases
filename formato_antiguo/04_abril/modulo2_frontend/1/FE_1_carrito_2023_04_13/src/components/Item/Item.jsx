import "./Item.css"
import {useState} from "react"

const Item = (props) => {
  const [quantity, setQuantity] = useState(1)

  const handleQuantityChange = (ev) => {
    setQuantity(parseInt(ev.target.value))
  }

  const handleAddToCart = () => {
    props.addToCart({...props, quantity})
  }

  return (
    <div className="item">
      <img src={props.image} alt={props.name} />
      <h4>{props.name}</h4>
      <h4>{props.price}€</h4>
      <label htmlFor="quantity">Quantity:</label>
      <select id="quantity" value={quantity} onChange={handleQuantityChange}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
      </select>
      <button onClick={handleAddToCart}>
        <span className="material-symbols-outlined">add_shopping_cart</span>
      </button>
    </div>
  )
}

export default Item
