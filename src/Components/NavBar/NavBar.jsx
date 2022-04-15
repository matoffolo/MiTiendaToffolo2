import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand as={Link}  to='/'>MI TIENDA</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link  as={Link}  to='/'>Inicio</Nav.Link>
      <NavDropdown title="Nuestros Productos" id="collasible-nav-dropdown">
        <NavDropdown.Item as={Link}  to='/category/Hombre'>Hombre</NavDropdown.Item>
        <NavDropdown.Item as={Link}  to='/category/Mujeres'>Mujeres</NavDropdown.Item>
        <NavDropdown.Item as={Link}  to='/category/Joyas'>Joyas</NavDropdown.Item>
        <NavDropdown.Item as={Link}  to='/category/Electronica'>Electronica</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link as={Link}  to='/Nosotros'>Nostros</Nav.Link>
      <Nav.Link as={Link}  to='/Contacto'>Contactos</Nav.Link>
    </Nav>
    <CartWidget cantidad= {2} />
    </Container>
  </Navbar>
    </div>
  );
}

export default NavBar;
