/*############################################
|||||||||||||||Importaciones
############################################*/

//Modulos
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
//Estilos
import "./ItemDetailContainer.css";
import ItemDetail from "../itemDetail/ItemDetail.js";
import {doc, getDoc} from "firebase/firestore";
import {db} from "../../services/firebase";
//componentes
//Core

/*############################################
|||||||||||||||Logica
############################################*/
const ItemDetailContainer = () => {
  //funcion constructora
  


  const {productoId} = useParams()

    const [item, setItem] = useState({});

    useEffect(()=>{
        const getProducto = async()=>{
            const queryRef = doc(db,"listaProductos",productoId);
            const response = await getDoc(queryRef);
            const newDoc = {
                id:response.id,
                ...response.data()
            }
            setItem(newDoc);
        }
        getProducto();
    },[productoId])
  return <section className="itemDetail-box">
    <Link to='/productos'>Volver a mis productos</Link>
    <article>
         <ItemDetail item={item}/>
    </article>

    </section>;
};
export default ItemDetailContainer;
