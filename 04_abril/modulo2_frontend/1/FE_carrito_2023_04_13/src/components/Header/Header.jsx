import "./Header.css"

const Header = ({cart, total}) => {
  return (
    <header>
      <div>
        <h1>
          <span className="material-symbols-outlined">sell</span> Random Store
        </h1>
        <p>Tu tienda de artículos que no tienen relación entre si</p>
      </div>
      <div>
        {cart.length > 0 && (
          <>
            <h4>
              <span className="material-symbols-outlined">shopping_cart</span>
              {cart.length}
            </h4>
            <h4>{total.toFixed(2)}€</h4>
          </>
        )}
      </div>
    </header>
  )
}

export default Header
