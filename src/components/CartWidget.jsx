import React from 'react';
import { Badge } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { useContext } from 'react';
import { CartContext } from './CartContext';

const CartWidget = () => {
    const { totalProductsQty } = useContext(CartContext)
  // render of the cart icon and the budge number
    return (
        <div className="cart">
        <Badge badgeContent={ totalProductsQty() } color="primary" className='badge'>
        <ShoppingCartIcon  color="action" />
</Badge>
        </div>
    );
}

export default CartWidget;
