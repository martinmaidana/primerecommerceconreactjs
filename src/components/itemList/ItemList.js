//        IMPORTACIONES

// Modulos
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

// Estilos
import "./ItemList.css";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
// Componentes
import Item from "../item/Item.js";

//        LOGICA

// Función constructora
const ItemList = () => {
  const [productos, setProductos] = useState([]);

  const { categoriaId } = useParams();

  useEffect(() => {
    if (categoriaId != null) {
      fetch(`https://fakestoreapi.com/products/category/${categoriaId}`)
        .then((res) => res.json())
        .then((json) =>
          setProductos(
            json.map((productos) => (
              <Item
                key={productos.id}
                id={"producto" + productos.id}
                data={productos}
              />
            ))
          )
        );
    } else {
      fetch(`https://fakestoreapi.com/products`)
        .then((res) => res.json())
        .then((json) =>
          setProductos(
            json.map((productos) => (
              <Item
                key={productos.id}
                id={"producto" + productos.id}
                data={productos}
              />
            ))
          )
        );
    }
  }, [categoriaId]);

  return (
    <div className="contenedor">
      <div>
        <ButtonGroup className="d-flex justify-content-around p-3">
          <Link to="/categoria/electronics">
            <Button>electronics</Button>
          </Link>
          <Link to="/categoria/jewelery">
            <Button>jewelery</Button>
          </Link>
          <Link to="/categoria/men's clothing">
            <Button>men's clothing</Button>
          </Link>
          <Link to="/categoria/women's clothing">
            <Button>women's clothing</Button>
          </Link>
        </ButtonGroup>
      </div>
      <div className="d-flex justify-content-around flex-wrap">{productos}</div>
    </div>
  );
};

//        EXPORTACIÓN
export default ItemList;
