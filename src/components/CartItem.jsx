import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const CartItem = ({ element }) => {

  const { deleteItem } = useContext(CartContext);

  return (
      <div className='CartItem'>
        <h3>{element.name}</h3>
        <p>quantity: {element.count}</p> 
        <p>subTotal: {element.count * element.price}</p>
        <button className='button' onClick={() => deleteItem(element.id)}>Delete</button>
      </div>
  )
};

export default CartItem;