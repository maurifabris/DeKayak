import { createContext } from "react";
import { useState } from "react";
import React from 'react';


export const CartContext = createContext()


const CartContextProvaider = ({ children }) => {

    const [cartList, setCartList] = useState([]);


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

    const clear = () => {
        setCartList([])
    }


    const isInCart = (id) => {
        return cartList.some((data) => data.id === id)
    }



    const deleteItem = (id) => {
        const updatedCart = cartList.filter(prod => prod.id !== id)
        setCartList(updatedCart);
    }


    const totalProductsQty = () => {
        return cartList.reduce((qty, itemCart) => qty + itemCart.count, 0)
    }

    const totalProductsPrice = () => {
        return cartList.reduce((qty, itemCart) => qty + (itemCart.item.price * itemCart.count), 0)
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
