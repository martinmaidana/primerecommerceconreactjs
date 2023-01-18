// #################
// IMPORTACIONES
// #################

//modulos
import { useState } from "react";

//estilos
import "./ItemListContainer.css";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
//componentes
import ItemList from "../itemList/ItemList";

// ################
// LOGICA
// ################
const ItemListContainer = (props) => {

  //funcion constructora
  const [categoria, setCategoria] = useState("");

  const categoriaCabernet = () => {
    setCategoria("Cabernet");
  };

  const categoriaMalbec = () => {
    setCategoria("Malbec");
  };
  const categoriaTodo = () => {
    setCategoria("Todo");
  };
  //array de objetos
  //iterar un array de objetos
  //mostrar todos los objetos

 

  return (
    <div className="itemList">
      <p >
        este es mi primer e-commerce con {props.greeting}
      </p>
      <h1>Subcribite para obtener descuentos y beneficios.</h1>
      <ButtonGroup className="mb-2">
        <Button variant="dark" onClick={categoriaMalbec}>Malbec</Button>
        <Button variant="dark" onClick={categoriaCabernet}>Cabernet</Button>
        <Button variant="dark" onClick={categoriaTodo}>Todos</Button>
      </ButtonGroup>

      

      <ItemList  categoriaNombre={categoria}></ItemList>
      
    </div>
  );
};

// ################
// EXPORTACIONES
// ################
export default ItemListContainer;
