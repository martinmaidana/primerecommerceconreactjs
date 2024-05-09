/*############################################
|||||||||||||||Importaciones
############################################*/

//Modulos
import { useState, useEffect } from "react";
//Estilos
import "./Hooks.css";

//componentes
//Core

/*############################################
|||||||||||||||Logica
############################################*/
const Hooks = () => {
  //funcion constructora
  //1. Hooks de estado
  //constructor.[estado]funcion que actualiza el estado = iniciiacion del estado (valor por defaul del estado)
  const [contador, setContador] = useState(0);

  //2, Hooks de efecto
  //useEffect(funcion(inicio, fin)), cantidad de instancias o variantes.

  return (
    <div>
      <div>
        <p>vino fulanito</p>
      </div>
      <div>
        <button onClick={() => setContador(contador - 1)}>-</button>
        <p>{contador}</p>
        <button onClick={() => setContador(contador + 1)}>+</button>
      </div>
      <div>
        <button>Agregar al carrito</button>
      </div>
    </div>
  );
};
export default Hooks;
