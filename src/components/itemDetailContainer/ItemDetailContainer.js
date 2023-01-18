/*############################################
|||||||||||||||Importaciones
############################################*/

//Modulos
import { useEffect } from "react";
import { useParams } from "react-router-dom";
//Estilos
import "./ItemDetailContainer.css";
import ItemDetail from "../itemDetail/ItemDetail.js";
//componentes
//Core

/*############################################
|||||||||||||||Logica
############################################*/
const ItemDetailContainer = () => {
  //funcion constructora

const {productoId} = {useParams}
useEffect(()=>{

  
},)
  return (
    <div>
      <p>ItemDetailContainer</p>
      <section className="itemDetail-box">
        <ItemDetail/>
      </section>
    </div>
  );
};
export default ItemDetailContainer;
