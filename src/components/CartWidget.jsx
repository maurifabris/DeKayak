import React from 'react';
import { Badge } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'


const CartWidget = () => {
    
  
    return (
        <div className="cart">
        <Badge badgeContent={4} color="primary" className='badge'>
        <ShoppingCartIcon  color="action" />
</Badge>
        </div>
    );
}

export default CartWidget;
