import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addItem = (item, amount) => {
        let itemAmount = { ...item, amount };
        if (!isInCart(item.id)) {
            setCart([...cart, itemAmount]);
        } else {
            
            const newProducts = cart.map(prod => {
                if(prod.id === item.id) {
                    const newProduct = {
                        ...prod,
                        amount: prod.amount + amount
                    }
                    return newProduct
                } else {
                    return prod
                }
            })

            setCart(newProducts)
        }
    };

    const isInCart = (id) => {
        return cart.some((e) => e.id === id);
    };

    const removeItem = (id) => {
        setCart( cart.filter((item) => item.id !== id));
    };

    const clear = () => {
        setCart([]);
    };

    const getQuantity = () => {
        let cant = 0
        cart.forEach((e) => cant += e.amount)
        return cant
    };
    
    const getTotal = () => {
        let total = 0
        cart.forEach((e) => total += (e.amount*e.price))
        return total        
    };
console.log("este console.log se ve desde context!");
    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart,getQuantity, getTotal }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider