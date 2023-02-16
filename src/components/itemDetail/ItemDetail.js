/*############################################
|||||||||||||||Importaciones
############################################*/

//Modulos
//Estilos
import "./ItemDetail.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ItemCount from "../itemCount/ItemCount.js";
import ItemListContainer from "../itemListContainer/ItemListContainer";
import { useContext, useState } from "react";
import {CartProvider, useCartContext} from "../../context/CartContext";
import { GContext } from "../cart/Cart";

//componentes
//Core

/*############################################
|||||||||||||||Logica
############################################*/
const ItemDetail = (props) => {
  //funcion constructora
  // const {addItem} = useContext(GContext);
// console.log(addItem);
  const [cantidadDeProductosAComprar, setCantidadDeProductosAComprar] = useState(0)

  const { title, description, category, price, image, id } = props.data;

const{ agregarAlCarrito} =useCartContext()

const funciondelhijoguardarcantidad = (cantidadx) =>{
  setCantidadDeProductosAComprar(cantidadx)
}

const onAdd = ()=>{
  if(cantidadDeProductosAComprar !== 0){
  const producto = {
    id:id,
    title:title,
    category:category,
    price:price,
    count: cantidadDeProductosAComprar,
  }
  agregarAlCarrito(producto)
}else {
  alert("No olvides añadir tus productos")
}}

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
              <ItemCount stock={10} guardarCantidadAComprar={funciondelhijoguardarcantidad} />
              <Button onClick={onAdd} variant="success">
        Agregar al carrito
      </Button>
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
