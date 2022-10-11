import NavBar from "./components/NavBar"
import ItemListContainer from "./conteiner/ItemListContainer";
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailConteiner from "./conteiner/ItemDetailConteiner";
import Cart from "./components/Cart";
import  CartContextProvaider  from "./components/CartContext";
import Footer from "./components/Footer";



function App() {
  return (
    <>
         <CartContextProvaider>
          <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/> {/* root*/}
                <Route path="/category/:idCategory" element={<ItemListContainer/>}/> {/* route to categoryas */}
                <Route path="/Cart" element={<Cart/>}/> {/* route to cart*/}
                <Route path="/item/:id" element ={<ItemDetailConteiner />} /> {/* route to specific item */}
                </Routes>
                <Footer/>
                </BrowserRouter>
        </CartContextProvaider>  
    </>  
  );
}

export default App;
