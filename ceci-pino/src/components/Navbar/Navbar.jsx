import CartWidget from "../CartWidget/CartWidget"

function Navbar() {
  return (
      <nav>
          <h3> Mi Ecommerce</h3>
          <div>
              <button> dulce </button>
              <button> salado </button>
              <button> umami </button>
          </div>
          <CartWidget/>
          </nav>
    
  )
}

export default Navbar