import { Children, createContext } from "react";
import { useState } from "react";
import React from 'react';


export const CartContext = createContext() 



const CartContextProvaider = ({Children}) => {

    const [cartList, setCartList] = useState(["cocacola"]);

    const addItem = (product) => {
        setCartList([
            ...cartList,
            product 
        ])
    }

    return (
        
        <CartContext.Provider value={{cartList, addItem}}>
            {Children}
        </CartContext.Provider>
        
    );
}

export default CartContextProvaider;
