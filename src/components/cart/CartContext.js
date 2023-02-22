// /*############################################
// |||||||||||||||Importaciones
// ############################################*/

// //Modulos
// //Estilos
import "./CartContext.css";
import { createContext, useState } from "react";
export const GContext = createContext();
//componentes
//Core

/*############################################
|||||||||||||||Logica
############################################*/
const CartContext = ({ children }) => {
  //funcion constructora
  const [itemsCarrito, SetItemsCarrito] = useState([]);
  const addItem = (item, quantity) => {
    const newItem = isInCart(item);
   if(newItem){
    quantity = quantity + newItem.quantity;
    SetItemsCarrito(itemsCarrito.splice(itemsCarrito.findIndex((element)=> element.item.id === item.id)))
   }
  };
  const isInCart = (item) => {
    return itemsCarrito.find((element) => element.item === item);
  };
  const clear=()=>{
SetItemsCarrito([])
  }
  const removeItem=(itemId)=>{
SetItemsCarrito(itemsCarrito.filter(element=>element.item.id != itemId))
  }

  return (
    <GContext.Provider
      value={{ addItem, itemsCarrito, isInCart, clear, removeItem }}
    >
      {children}
    </GContext.Provider>
  );
};
export default CartContext;
