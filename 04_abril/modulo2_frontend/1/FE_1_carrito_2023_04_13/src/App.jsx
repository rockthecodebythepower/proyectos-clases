import "./App.css"
import {useState, useEffect} from "react"
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"
import items from "./data/items"

const App = () => {
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    let newTotal = 0
    cart.forEach((item) => {
      newTotal += item.price * item.quantity
    })
    setTotal(newTotal)
    console.log(cart)
  }, [cart])

  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem === item.id)
    if (existingItem) {
      const updatedCart = cart.map((cartItem) => {
        if (cartItem.id === item.id) {
          return {...cartItem, quantity: cartItem.quantity + item.quantity}
        }
        return cartItem
      })
      setCart(updatedCart)
    } else {
      setCart([...cart, item])
    }
  }

  return (
    <div className="App">
      <Header cart={cart} total={total} />
      <Main items={items} addToCart={addToCart} cart={cart} />
      <Footer />
    </div>
  )
}

export default App
