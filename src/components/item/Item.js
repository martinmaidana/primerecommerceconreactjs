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
import{Link} from 'react-router-dom'
//Core

/*############################################
|||||||||||||||Logica
############################################*/
const Item = (props) => {
  //funcion constructora
  const { nombre, descripcion, categoria, precio, stock, Año, imagen, id } =
    props.data;
  return (
    <div>
      <Card bg="dark" style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>
            {" "}
            <p>{nombre}</p>
          </Card.Title>
          <Card.Text>
            {descripcion}
            {categoria}
          </Card.Text>
          <Card.Text>{Año}</Card.Text>

          <Card.Text>Precio: {precio}</Card.Text>
          <Link to={`/producto/${id}`}>Ver Detalle del  Producto</Link>
          <ItemCount stock={stock} />
        </Card.Body>
      </Card>
    </div>
  );
};
export default Item;
