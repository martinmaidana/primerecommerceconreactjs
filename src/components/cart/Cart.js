
import "./Cart.css";
import { useContext} from "react";

import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

import { Button } from "react-bootstrap";



const Cart = () => {
    const {cart, clear, removeItem, getTotal, getQuantity} = useContext(CartContext)
const tot = getTotal();
const cantidadTotal = getQuantity();
    return (
        <div>
        <section>
        <Link to='/carrito'>Bienvenidos al carrito de compras</Link>
        {
        cart.length === 0 ? <h2> Tu carrito esta vacio <Link to='/productos'>Volver a mis productos</Link></h2>    

        :<div>
            {cart.map((item)=>{
                    return(
                        <div className="flex" key={item.id}>
                        <p>{item.title}</p>
                        <p>${item.price}</p>
                        <p>cantidad: {item.amount}</p>
                        
                        <p>Subtotal: {item.amount*item.price}</p>
                        <Button onClick={()=>removeItem(item.id)}>eliminar </Button>
                        </div> 
                    )
                    })}   
        <Button onClick={()=>clear(cart.id)}>vaciar carrito</Button>
        <h2>Tienes {cantidadTotal} productos en tu carrito.</h2>
        <h1> El total es: {tot} </h1>
        <Button>Finalizar compra</Button>
            </div>
        }
        </section>
        </div>
        )
}

export default Cart