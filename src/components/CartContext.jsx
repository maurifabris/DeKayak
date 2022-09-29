import { createContext } from "react";
import { useState } from "react";
import React from 'react';


export const CartContext = createContext()



const CartContextProvaider = ({ children }) => {

    const [cartList, setCartList] = useState([]);


    const addItem = (product, add) => {
        if (isInCart(product.id)) {
            const indexItem = cartList.findIndex(ele => ele.item.id == product.id);
            cartList[indexItem].add = cartList[indexItem].add + add;
            setCartList([...cartList]);
        } else {
            const newProduct = {
                item: product,
                add
            }
            setCartList([...cartList, newProduct])
        }
    }

    const clear = () => {
        setCartList([])
    }


    const isInCart = (id) => {
        return cartList.some(element => element.id === id)
    }



    const deleteItem = (id) => {
        const updatedCart = cartList.filter(element => element.item.id !== id)
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
        deleteItem,

    }
    return (

        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>

    );
}

export default CartContextProvaider;
