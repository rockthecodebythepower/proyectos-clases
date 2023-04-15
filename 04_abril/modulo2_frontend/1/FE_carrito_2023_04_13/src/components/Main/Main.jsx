import "./Main.css"
import Item from "../Item/Item"
import Cart from "../Cart/Cart"

const Main = ({items, addToCart, cart}) => {
  return (
    <main>
      <section className="articles">
        {items.map((item) => (
          <figure key={item.id}>
            <Item {...item} addToCart={addToCart} />
          </figure>
        ))}
      </section>
      <Cart cart={cart} />
    </main>
  )
}

export default Main
