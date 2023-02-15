/*############################################
|||||||||||||||Importaciones
############################################*/

//Modulos
//Estilos
import "./Item.css";

//componentes
import ItemCount from "../itemCount/ItemCount.js";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
//Core

/*############################################
|||||||||||||||Logica
############################################*/
const Item = (props) => {
  //funcion constructora
  const { title, price, image, id } = props.data;
  return (
    <div>
      <Card bg="warning" style={{ width: "15rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>
            <p>{title}</p>
          </Card.Title>
          <Card.Text>Precio: {price}</Card.Text>
          <Link to={`/producto/${id}`}>Ver Detalle del Producto</Link>
          {/* modificar el STOCK al crear una API interna */}
          {/* <ItemCount stock={10} /> */}
        </Card.Body>
      </Card>
    </div>
  );
};
export default Item;
