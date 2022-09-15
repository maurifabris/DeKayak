import React from 'react';

import { Badge } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

//import {carrito, setcarrito} from "./Kayak"

const CartWidget = () => {
    const carrito = 5
  
    return (
        <div className="cart">
        <Badge badgeContent={carrito} color="primary" className='badge'>
        <ShoppingCartIcon  color="action" />
</Badge>
        </div>
    );
}

export default CartWidget;
