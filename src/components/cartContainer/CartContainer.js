import React from "react";
import "./CartContainer.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

import Button from "react-bootstrap/Button";

const CartContainer = () => {
  //funcion constructora


  const { getTotal, cart, getQuantity} = useContext(CartContext)
const tot = getTotal();
const cantidadTotal = getQuantity();
const sendOrder =()=>{
   
}
  return (
    <div>
      <h2>Tienes {cantidadTotal} productos en tu carrito.</h2>
      <h1> El total es: {tot} </h1>
      <h1>Formulario de compra</h1>
      <p>Por favor ingrese su datos para poder finalizar su compra</p>
      <form method="post" a>
        <fieldset>
          <label for="first-name">
            Ingrese su nombre:{" "}
            <input id="first-name" name="first-name" type="text" required />
          </label>
          <label for="last-name">
            Ingrese su apellido:{" "}
            <input id="last-name" name="last-name" type="text" required />
          </label>
          <input
            type="tel"
            name="telefono"
            placeholder="(Código de área) Número"
          ></input>
          <label for="email">
            Ingrese su Email:{" "}
            <input id="email" name="email" type="email" required />
          </label>
          <label for="email">
            Confirme su Email:{" "}
            <input id="email" name="email" type="email" required />
          </label>
         
        </fieldset>

        <fieldset>
          <label for="referrer">
            Seleccion su medio de pago
            <select id="referrer" name="referrer">
              <option value="">(select uno)</option>
              <option value="1">Efectivo</option>
              <option value="2">Tarjeta de Credito</option>
              <option value="3">Tarjeta de Debito</option>
              <option value="4">Mercadopago</option>
              <option value="5">Otros</option>
            </select>
          </label>
        </fieldset>
       <Button onClick={sendOrder}>Enviar Formulario</Button>
      </form>
    </div>
  );
};
export default CartContainer;
