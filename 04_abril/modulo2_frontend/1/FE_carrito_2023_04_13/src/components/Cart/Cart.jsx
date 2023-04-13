import "./Cart.css"

const Cart = ({cart}) => {
  return (
    <section className="cart">
      {cart.map((item) => (
        <figure key={item.id}>
          <img src={item.image} alt={item.name} />
        </figure>
      ))}
    </section>
  )
}

export default Cart
