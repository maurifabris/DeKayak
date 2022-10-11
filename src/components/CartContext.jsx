import { createContext } from "react";
import { useState } from "react";
import React from 'react';


export const CartContext = createContext()


const CartContextProvaider = ({ children }) => {

    const [cartList, setCartList] = useState([]);

    //function for add items to cartList
    const addItem = (product, count) => {
        if (isInCart(product.id)) {
            const indexItem = cartList.findIndex(() => product.id == product.id);
            cartList[indexItem].count = cartList[indexItem].count + count;
            setCartList([...cartList]);
        } else {
            const newProduct = {
                ...product,
                count: count
            }
            setCartList([...cartList, newProduct])
        }
    }
    // function for delete cartList
    const clear = () => {
        setCartList([])
    }

    // function for check if an item is in cartList
    const isInCart = (id) => {
        return cartList.some((data) => data.id === id)
    }


    // function for delete an item por list
    const deleteItem = (id) => {
        const updatedCart = cartList.filter(prod => prod.id !== id)
        setCartList(updatedCart);
    }

    // function for calculete the quantity of ech item is in cart 
    const totalProductsQty = () => {
        return cartList.reduce((qty, itemCart) => qty + itemCart.count, 0)
    }
// function for calculate the total price of the cart
    const totalProductsPrice = () => {
        return cartList.reduce((qty, itemCart) => qty + (itemCart.price * itemCart.count), 0)
    }

    const value = {
        cartList,
        addItem,
        clear,
        isInCart,
        totalProductsQty,
        totalProductsPrice,
        deleteItem


    }

    return (

        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>

    );
}

export default CartContextProvaider;
