import NavBar from "./components/NavBar"
import ItemListContainer from "./conteiner/ItemListContainer";
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailConteiner from "./conteiner/ItemDetailConteiner";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="">
         <>
         <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="prueba" element={<ItemDetailConteiner/>}/>
                <Route path="/category/:id" element={<ItemListContainer/>}/>
                <Route path="/Cart" element={<Cart/>}/>
                </Routes>
        </BrowserRouter>
       </>
    </div>  
  );
}

export default App;
