import CartWidget from "../CartWidget/CartWidget"

function Navbar() {
  return (
      <nav>
          <h3> Mi Tiendita de Componentes</h3>
          <div>
              <button> Componentes Divertidos </button>
              <button> Componentes Serios </button>
              <button> Componentes Mixtos </button>
          </div>
          <CartWidget/>
          </nav>
    
  )
}

export default Navbar