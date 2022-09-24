import NavBar from "./components/NavBar"
import ItemListContainer from "./conteiner/ItemListContainer";
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailConteiner from "./conteiner/ItemDetailConteiner";
import Cart from "./components/Cart";
import { CartContext } from "./components/CartContext";

function App() {
  return (
    <CartContext value={["kayak, casco"]}>
         <>
         <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="prueba" element={<ItemDetailConteiner/>}/>
                <Route path="/category/:idCategory" element={<ItemListContainer/>}/>
                <Route path="/Cart" element={<Cart/>}/>
                </Routes>
        </BrowserRouter>
       </>
    </CartContext>  
  );
}

export default App;
