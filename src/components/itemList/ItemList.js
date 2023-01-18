/*############################################
|||||||||||||||Importaciones
############################################*/

// Modulos
import {useState} from 'react'
// Estilos
import "./ItemList.css";

// componentes
import Item from "../item/Item";
// Core

/*############################################
|||||||||||||||Logica
############################################*/
const ItemList = (props) => {
  //funcion constructora

  const listaDeProductos = [
    {
      id: 1,
      nombre: "Vino Rutini. 750 ml",
      categoria: "Malbec",
      precio: 80000,
      Año: "2013",
      descripcion:"",
      imagen:"",
      stock: 10,
    },
    {
      id: 2,
      nombre: "Vino Luigi Bosca. 750 ml",
      categoria: "Malbec",
      precio: 50000,
      Año: "2020",
      descripcion:"",
      imagen:"",
      stock: 12,
    },
    {
      id: 3,
      nombre: "Vino Catena Zapata. 750 ml",
      categoria: "Cabernet",
      precio: 20000,
      Año: "2019",
      descripcion:"",
      imagen:"",
      stock: 7,
    },
    {
      id: 4,
      nombre: "Vino Alma Negra. 750 ml",
      categoria: "Malbec",
      precio: 90000,
      Año: "2018",
      descripcion:"",
      imagen:"",
      stock: 5,
    },
    {
      id: 5,
      nombre: "Vino Angelica Zapata. 750 ml",
      categoria: "Cabernet",
      precio: 90000,
      Año: "2018",
      descripcion:"",
      imagen:"",
      stock: 5,
    },
    {
      id: 6,
      nombre: "Vino Nicasia. 750ml ",
      categoria: "Cabernet",
      precio: 90000,
      Año: "2018",
      descripcion:"",
      imagen:"",
      stock: 5,
    },
    {
      id: 7,
      nombre: "Vino Luigi Bosca. 750ml",
      categoria: "Cabernet",
      precio: 90000,
      Año: "2018",
      descripcion:"",
      imagen:"",
      stock: 5,
    },
    {
      id: 8,
      nombre: "Vino Trumpeter. 750ml",
      categoria: "Cabernet",
      precio: 90000,
      Año: "2018",
      descripcion:"",
      imagen:"",
      stock: 5,
    },
    {
      id: 9,
      nombre: "Vino Escorihuela Gascón. 750ml",
      categoria: "Malbec",
      precio: 90000,
      Año: "2018",
      descripcion:"",
      imagen:"",
      stock: 5,
    },
  ];

//nuestra API de productos
//archivo JSON =>'../../misProductos.json'
  
  let productosRenderizables = [];

  if (props.categoriaNombre === "Todo" ) {
   
    productosRenderizables = listaDeProductos.map((productos) => (
      <Item
        key={productos.id}
        id={"producto" + productos.id}
        data={productos}
      />
    )); 
  } else {
    const productosPorCategoria = listaDeProductos.filter(
      e => e.categoria === props.categoriaNombre
    );

    productosRenderizables = productosPorCategoria.map(productos => (
      <Item
        key={productos.id}
        id={"producto" + productos.id}
        data={productos}
      />
    )
    );
  }

  //transformar estos datos en elementos renderizables
  //iterar nuestro array de objetos
  //mostrar todos los objetos
  //pasar la informacion real
  //mostrar la informacion real
  return (
    <div className="tarjetas">
      
     {productosRenderizables}
     
    </div>
  );
};
export default ItemList;
