import './App.css'
import { sampleProducts } from './data'
import { formatPrice } from './utils/formatters'

function App() {
  return (
    <>
      <div>
        <header>Samco Computers</header>
        <main>
          {
            /* Product Listing */
            sampleProducts.map((product) => (
              <div key={product.slug}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>Price: {formatPrice(product.price)}</p>
              </div>
            ))
          }
        </main>
        <footer>
          &copy; 2026 Samco Computers. All Rights Reserved. Designed and
          Developed by Octate Systems.
        </footer>
      </div>
    </>
  )
}

export default App
