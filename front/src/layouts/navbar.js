import { Navbar, Nav, Container } from "react-bootstrap"
import { Link, Outlet } from "react-router-dom"

const NavBarP = () => (
  <>
    <header id="header" className="fixed-top d-flex align-items-center">
      <div className="container d-flex align-items-center justify-content-between">

        <div className="logo">
          <h1><Nav.Link as={Link} to="/">Innovacion Digital</Nav.Link></h1>
        </div>

        <Navbar id="navbar" className="navbar">
          <Container>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="about">Nosotros</Nav.Link>
                <Nav.Link as={Link} to="clients">Clientes</Nav.Link>
                <Nav.Link as={Link} to="team">Equipo</Nav.Link>
                <Nav.Link as={Link} to="contact">Contacto</Nav.Link>
                <Nav.Link as={Link} to="NovedadesPage">Novedades</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </header>
    <section>
      <Outlet></Outlet>
    </section>
  </>
)

export default NavBarP