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
import { CartContext } from "../../context/CartContext";
import {db} from "../../services/firebase";
//componentes
//Core
/*############################################
|||||||||||||||Logica
############################################*/
const ItemDetail = (props) => {  
  //funcion constructora
  const { title, description, category, price, image, id, stock } = props.data;
const {addItem} = useContext(CartContext)
console.log(addItem)

const onAdd = (cantidad)=>{
  if(cantidad !== 0){
   
  const producto = {
    id:id,
    title:title,
    category:category,
    price:price,
    count: cantidad,
  }
  // agregarAlCarrito(producto)
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
              <ItemCount stock={stock}  onAdd={onAdd}/>
         
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