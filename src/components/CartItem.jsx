import React, { useContext } from 'react';
import { CartContext } from './CartContext';
 

const CartItem = () => {

  const { deleteItem, cartList} = useContext(CartContext);

  return (
      <div className='CartItem'>
        sadadas
        <h3>{cartList.name}</h3>
        {/* <p>quantity: {data.count}</p> 
        <p>subTotal: {data.count * data.price}</p> */}
        {/* <button className='button' onClick={() => deleteItem(data.id)}>Delete</button>  */}
       
      </div>
  )
};

export default CartItem;