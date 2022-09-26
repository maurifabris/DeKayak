import React, { useContext } from 'react';

import { CartContext } from './CartContext';

const Cart = () => {

    const {cartList} = useContext(CartContext);



    return (
        <>
            <h1>i am cart</h1>
            {
                cartList.map(item => <div key={item.id}><li>{item.name}</li></div>)
            }
        </>
    );
}

export default Cart;
