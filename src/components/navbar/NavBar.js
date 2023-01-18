// #################
// IMPORTACIONES
// #################

//modulos
import {Link} from 'react-router-dom'
//estilos
import "./NavBar.css";
import CardWidget from "../cardWidget/CardWidget.js";
import logo from "./assets/logo.png"
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";


// ################
// LOGICA
// ################
const NavBar = function BasicExample() {
  //funcion constructora
  return (
    <Navbar bg="info" expand="md">
      <img src={logo} className="imagenLogo" alt="logo"></img>

      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="justify-content-end" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
      
            <Link to="/">HOME</Link>
            <Link to="/productos">PRODUCTOS</Link>
            {/* <Link to="/catas">CATAS</Link> */}
            <Link to="/nosotros">NOSOTROS</Link>
            {/* <NavDropdown title="UVAS" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Tipos de Uva
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Quienes somos
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Bodegas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Contacto</NavDropdown.Item>
            </NavDropdown> */}
           
            <CardWidget cantidad="27" />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

// ################
// EXPORTACIONES
// ################
export default NavBar;
