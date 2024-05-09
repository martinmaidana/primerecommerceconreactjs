// #################
// IMPORTACIONES
// #################

import { Link } from "react-router-dom";
//estilos
import "./NavBar.css";
import CardWidget from "../cardWidget/CardWidget.js";
import verificar from "./assets/verificar.png";
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

      <nav className="navbar">
        <div className="brand">
          
        </div>
        <div className="nav-links">
        <Link class="seccion-logo" to="/">
            <img src={verificar} className="imagenlogo" alt="logo" />
            <h1>E-Shop</h1>
          </Link>
          <Link to="/" className="nav-link">HOME</Link>
          <Link to="/productos" className="nav-link">PRODUCTOS</Link>
          <Link to="/nosotros" className="nav-link">NOSOTROS</Link>
          <CardWidget cantidad="27" />
        </div>
      </nav>
    );
  };
 
export default NavBar;