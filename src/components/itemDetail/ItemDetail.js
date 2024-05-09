/*############################################
|||||||||||||||Importaciones
############################################*/

//Modulos
//Estilos
import "./ItemDetail.css";
import Card from "react-bootstrap/Card";

import ItemCount from "../itemCount/ItemCount.js";
import ItemListContainer from "../itemListContainer/ItemListContainer";
//componentes
//Core

/*############################################
|||||||||||||||Logica
############################################*/
const ItemDetail = (props) => {
  //funcion constructora
  const { title, description, category, price, image } = props.data;

  return (
    <article className="itemDetail-producto">
      <h1>DETALLE DEL PRODUCTO SELECCIONADO</h1>
      <div className="tarjeta">
        <Card border="success" style={{ width: "36rem" }}>
          <div>
            <Card.Img variant="top" src={image} />
            <Card.Header>{category}</Card.Header>
          </div>
          <div>
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{description}</Card.Text>
              <Card.Text>Precio: {price}</Card.Text>
              <ItemCount stock={10} />
            </Card.Body>
          </div>
        </Card>
      </div>
      <h1>MAS PRODUCTOS</h1>
      <ItemListContainer></ItemListContainer>
    </article>
  );
};
export default ItemDetail;
