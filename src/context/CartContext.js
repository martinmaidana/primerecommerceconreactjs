//IMPORTACIONES
//useContext:  utiliza el conexto creado,createContex, crea el contexto de la app=>React

import { useContext, createContext, useState } from "react";
//crear el contexto         valor dentro del argumento de la funcion es el valor por default del conexto

//2do exportar el contexto
export const CartContext = createContext([]);

//3°crear nuestra funcion para poder manejar el context.

//4°definirlo como un hook personalizado
//5°exportar la funcion qque almacena el hhok use contecy

export const useCartContext = () => {
  return useContext(CartContext);
};
//6°crear el componente del conexto proveedor

const CartProvider = ({ children }) => {
  //estado del cartprovider
  const [items, setItems] = useState([]);
  //funciones del provider

  console.log(items);
  const agregarAlCarrito = (data) => {
if( validarProductoExistente(data.id)){
alert("el producto ya esta en el carrito")
}else{
    const listaActual = items;
    listaActual.push(data);
    setItems(listaActual);
    console.log(items);
}

  };

  const borrarDelCarrito =(id)=>{
    const nuevaLista = items.filter(e=>e.id !==id)
    setItems(nuevaLista)

  }
  const limpiarCarrito =()=>{
setItems([])
  }
  const validarProductoExistente =(id)=>{
    if(items.find(e => e.id === id )){
        return true
    }
    else{
        return false
    }

  }




  return (
    <>
      <CartContext.Provider value={{ items, agregarAlCarrito }}>
        {children}
      </CartContext.Provider>
    </>
  );
};

export default CartProvider;