import React, { useContext } from 'react';
import { CartContext } from './CartContext';
 

const CartItem = ( { prod }) => {

  const { deleteItem } = useContext(CartContext);
//render of an items in the cart
  return (
      <div className='CartItem'>
        
        <h3>{prod.name}</h3>
        <img src={prod.picture}/>
        <h3>{prod.description}</h3>
        <h3> costo por unidad:{prod.price}</h3>
        <h3></h3>
        <p>quantity: {prod.count}</p> 
        <p>{prod.count * prod.price}</p>
        <button className='button' onClick={() => deleteItem(prod.id)}>Delete</button> 
       
      </div>
  )
};

export default CartItem;