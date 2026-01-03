import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import { sampleProducts } from './data'
import { formatPrice } from './utils/formatters'

function App() {
  return (
    <>
      <div className="d-flex flex-column vh-100">
        <header>
          <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
              <Navbar.Brand href="#home">Samco Computers</Navbar.Brand>
            </Container>
            <Nav>
              <a href="/cart" className="nav-link">
                Cart
              </a>
              <a href="/login" className="nav-link">
                Login
              </a>
            </Nav>
          </Navbar>
        </header>
        <main>
          <Container className="mt-3">
            <Row>
              {
                /* Product Listing */
                sampleProducts.map((product) => (
                  <Col key={product.slug} sm={6} md={4} lg={3}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-image"
                    />
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>Price: {formatPrice(product.price)}</p>
                  </Col>
                ))
              }
            </Row>
          </Container>
        </main>
        <footer>
          <div className="text-center">
            &copy; 2026 Samco Computers. All Rights Reserved. Designed and
            Developed by Octate Systems.
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
