import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap'
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">MI TIENDA</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#Inicio">Inicio</Nav.Link>
      <Nav.Link href="#NuestroProductos">Nuestros Productos</Nav.Link>
      <Nav.Link href="#Nostros">Nostros</Nav.Link>
      <Nav.Link href="#Contactos">Contactos</Nav.Link>
    </Nav>
    <CartWidget cantidad= {2} />
    </Container>
  </Navbar>
    </div>
  );
}

export default NavBar;
