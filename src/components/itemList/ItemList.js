//        IMPORTACIONES

// Modulos
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../services/firebase.js";

// Estilos
import "./ItemList.css";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
// Componentes
import Item from "../item/Item.js";

//        LOGICA
// Función constructora
const ItemList = () => {

  const { categoriaId } = useParams();

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    
      const getData = async() => {
        //1. creamos una consulta que vamos a realizar a la base de datos
      const queryRef = categoriaId ? query(collection(db,"listaProductos"), where("category","==",categoriaId  )): collection(db,"listaProductos")
        //2.hacer la consulta
        const response = await getDocs(queryRef);
        const docsInfo = response.docs.map(doc=>{
              const newDoc ={
          id:doc.id,
          ...doc.data()
        }
        return newDoc
         });
       
         setProductos(docsInfo)       
      };
      getData();
    },[categoriaId]);
  

  //   if (categoriaId != null) {
  //     fetch(`https://fakestoreapi.com/products/category/${categoriaId}`)
  //       .then((res) => res.json())
  //       .then((json) =>
  //         setProductos(
  //           json.map((productos) => (
  //             <Item
  //               key={productos.id}
  //               id={"producto" + productos.id}
  //               data={productos}
  //             />
  //           ))
  //         )
  //       );
  //   } else {
  //     fetch(`https://fakestoreapi.com/products`)
  //       .then((res) => res.json())
  //       .then((json) =>
  //         setProductos(
  //           json.map((productos) => (
  //             <Item
  //               key={productos.id}
  //               id={"producto" + productos.id}
  //               data={productos}
  //             />
  //           ))
  //         )
  //       );
  //   }
  // }, [categoriaId]);

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
      <div className="d-flex justify-content-around flex-wrap">{productos.map((prod)=> <Item key={prod.id} data={prod}/>)}</div>
    </div>
  );
};

//        EXPORTACIÓN
export default ItemList;
