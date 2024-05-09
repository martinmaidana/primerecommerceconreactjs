/*############################################
|||||||||||||||Importaciones
############################################*/

//Modulos
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
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
  const [productos, setProductos] = useState([]);

  const { productoId } = useParams();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productoId}`)
      .then((res) => res.json())
      .then((productos) =>
        setProductos(
          <ItemDetail
            key={productos.id}
            id={"producto" + productos.id}
            data={productos}
          />
        )
      );
  }, [productoId])
  return <section className="itemDetail-box">
    <Link to='/productos'>Volver a mis productos</Link>
    {productos}
    </section>;
};
export default ItemDetailContainer;
