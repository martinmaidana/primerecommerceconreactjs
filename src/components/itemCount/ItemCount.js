/*############################################
|||||||||||||||Importaciones
############################################*/

//Modulos
import { useState } from "react";
//Estilos
import "./ItemCount.css";
import Button from "react-bootstrap/Button";

//componentes
//Core

/*############################################
|||||||||||||||Logica
############################################*/
const ItemCount = (props) => {
  //funcion constructora
  //props.stock="7"
  //No puede restar menos de 0
  //no puede mas de la cantidad maxima en stock
  //no puede funcionar si no hay stock

  //Agregar un manejo de estado
  //useState
  const [count, setCount] = useState(0);
  //Funciones de suma hasta el limite de sotck
  const addOne = () => {
    if (count < props.stock) setCount(count + 1);
  };
  //funcion de resta hasta el minimo, 0
  const disOne = () => {
    if (count > 0) setCount(count - 1);
  };
  //Funcion Agregar por cantidad de productos
  const onAdd = () => {
    console.log(count);
  };

  return (
    <div className="box-count">
      <div className="box-count-children">
        {/* <p>{props.vino}</p> */}
        <Button variant="outline-success" onClick={disOne}>
          -
        </Button>{" "}
        <p>{count}</p>
        <Button variant="outline-success" onClick={addOne}>
          +
        </Button>{" "}
      </div>
      <Button onClick={onAdd} variant="success">
        Agregar al carrito
      </Button>
    </div>
  );
};
export default ItemCount;
