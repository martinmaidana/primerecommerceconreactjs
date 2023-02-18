import React from "react";
import "./CartContainer.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import {getFirestore, deleteDoc, collection, addDoc, setDoc, doc, getDoc, onSnapshot} from "firebase/firestore";
import {useEffect, useState } from "react";
import { db } from "../../services/firebase"


import Button from "react-bootstrap/Button";

const CartContainer = () => {
  //funcion constructora



  const { getTotal, getQuantity} = useContext(CartContext);
//   const {orderId, setOrderId} = useState (undefined)
  
const tot = getTotal();
const cantidadTotal = getQuantity();

  const valorInicial ={
    buyer:{
 nombre:"",
    apellido:"",
    email:"",
    telefono:"",
    referrer:"",  
    }

  }
const [user, setUser]= useState(valorInicial)  
const capturarInputs = (e)=>{
    const {name,value}= e.target;
    setUser({...user, [name]:value})
}

const guardarDatos = async(e)=>{
    e.preventDefault();
    console.log(user)
    setUser({...valorInicial})
}
   

// const queryRef = collection(db,"orders");
// const response = addDoc(queryRef, valorInicial);
// console.log(response)
// valorInicial(response.id)
  return (
    <div>
      <h2>Tienes {cantidadTotal} productos en tu carrito.</h2>
      <h1> El total es: {tot} </h1>
      <h1>Formulario de compra</h1>
      {/* <h3>Su numero de pedido es {orderId}</h3> */}
      <p>Por favor ingrese su datos para poder finalizar su compra</p>
      <form onSubmit={guardarDatos}>
        <fieldset>
          <label htmlFor="nombre">
            Ingrese su nombre:{" "}
            <input id="nombre" name="nombre" type="text"  onChange={capturarInputs} value={user.nombre} required/>
          </label>
          <label htmlFor="apellido">
            Ingrese su apellido:{" "}
            <input id="apellido" name="apellido" type="text" onChange={capturarInputs} value={user.apellido} required />
          </label>
          <input
            type="tel"
            name="telefono"
            placeholder="(Código de área) Número" onChange={capturarInputs} value={user.telefono}
          ></input>
          <label htmlFor="email">
            Ingrese su Email:{" "}
            <input id="email" name="email" type="email" onChange={capturarInputs} value={user.email} required />
          </label>
          <label htmlFor="email">
            Confirme su Email:{" "}
            <input id="email" name="email" type="email" onChange={capturarInputs} value={user.email} required />
          </label>
         
        </fieldset>

        <fieldset>
          <label htmlFor="referrer">
            Seleccion su medio de pago
            <select id="referrer" name="referrer" onChange={capturarInputs} value={user.referrer}>
              <option value="">(select uno)</option>
              <option value="Efectivo">Efectivo</option>
              <option value="Tarjeta de Credito">Tarjeta de Credito</option>
              <option value="Tarjeta de Debit">Tarjeta de Debito</option>
              <option value="Mercadopago">Mercadopago</option>
             
            </select>
          </label>
        </fieldset>
       <Button onClick={guardarDatos}>Enviar Formulario</Button>
      </form>
    </div>
  );
};
export default CartContainer;
