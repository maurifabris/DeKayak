import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import Button from '@mui/material/Button';
import CartItem from './CartItem';
import { serverTimestamp, doc, setDoc, collection, updateDoc, increment } from 'firebase/firestore';
import { db } from "../utils/firebaseConfig"
import Swal from 'sweetalert2';

const Cart = () => {

    const { cartList, clear, totalProductsPrice} = useContext(CartContext);

      // function for create an "hardcodeated" client
    const crateOrder = async() => {
      let order = {
        buyer: {
          name: "Mauri",
          email: "maurifabris91@gmail.com",
          phone: 1152522525,
        },
        data: serverTimestamp(),
        items: cartList,
        total: totalProductsPrice()
        }
        //this saves the order in database
          const newOrderRef = doc(collection(db, "orders"))
          await setDoc(newOrderRef, order);
          //this decrease stock when a order list is created
          cartList.forEach(async (item) => {
            const itemRef = doc(db, "productos", item.id )
            await updateDoc(itemRef, {
              stock: increment( - item.count)
            }) 
          });



          clear()
          Swal.fire(`Generaste una orden de compra, tu id de compra es:   ${newOrderRef.id}`)
        }
      
    

    return (
      
        <>
        {/* render of an empty cart*/ }
        {cartList.length === 0 ?
          <div>
            <p>Empty Cart</p>
            <Link to='/'>Go to shop!</Link>
          </div>
          :
          
          <div className='CartContainer'>
             {/* render of an cartlist*/ }
            {cartList.map(element => <CartItem key={element.id} prod={element} />)}
            <Button variant="outlined" color="error"  onClick={() => clear()}>
            Clear Cart
            </Button>
            <Button variant="outlined" color="success" onClick={() => crateOrder()}>
            Confirmar compra de: ${totalProductsPrice()} 
      </Button>
             
          </div>
        }
      </>
    );
}

export default Cart;
