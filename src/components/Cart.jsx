import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import Button from '@mui/material/Button';
import CartItem from './CartItem';
import { serverTimestamp, doc, setDoc, collection, updateDoc, increment } from 'firebase/firestore';
import { db } from "../utils/firebaseConfig"


const Cart = () => {

    const { cartList, clear, totalProductsPrice} = useContext(CartContext);

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
          const newOrderRef = doc(collection(db, "orders"))
          await setDoc(newOrderRef, order);
          
          cartList.forEach(async (item) => {
            const itemRef = doc(db, "productos", item.id )
            await updateDoc(itemRef, {
              stock: increment( - item.count)
            }) 
          });



          clear()
          alert("Generaste una orden de compra, tu id de compra es" + newOrderRef.id)
        }
      
    

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
