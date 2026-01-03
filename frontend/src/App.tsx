import { Container, Nav, Navbar } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'

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
            <Outlet />
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
