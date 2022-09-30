import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

import CartItem from './CartItem';

const Cart = () => {

    const { cartList, clear, totalProductsQty} = useContext(CartContext);



    return (
      
        <>
        {cartList.length === 0 ?
          <div>
            <p>Empty Cart</p>
            <Link to='/'>Go to shop!</Link>
          </div>
          :
          <div className='CartContainer'>
            {cartList.map(element => <CartItem key={element.id} prod={element} />)}
            <button className='button' onClick={() => clear()}>Clear Cart</button>
            {/* <b>Total: ${totalProductsQty()}</b> */}
          </div>
        }
      </>
    );
}

export default Cart;
