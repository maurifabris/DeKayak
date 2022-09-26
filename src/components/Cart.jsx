import React, { useContext } from 'react';
import { CartContextProvaider } from './CartContext';
import { CartContext } from './CartContext';

const Cart = () => {

    const {cartList} = useContext(CartContext);



    return (
        <>
            <h1>i am cart</h1>
            {
                cartList.map(item => <li>{item}</li>)
            }
        </>
    );
}

export default Cart;
