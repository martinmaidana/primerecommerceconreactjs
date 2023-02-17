
import "./Cart.css";
import React, {createContext, useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { collection, addDoc, doc, updateDoc} from "firebase/firestore";
import { db } from "../../services/firebase";


const Cart = () => {
    const {items} = useCartContext()
  return (
    <div>
        <section>
        <Link to='/Carrito'>Estoy en el carrito</Link>
        </section>
        {
            items.length === 0 ? <h2> Tu carrito esta vacio</h2>
            :items.map((item)=>{
                return(
                    <div key={item.id}>
                        <p>{item.title}</p>
                        <p>$ {item.price}</p>
                        <p>cantidad: {item.count}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Cart