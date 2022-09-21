import NavBar from "./components/NavBar"
import ItemListContainer from "./conteiner/ItemListContainer";
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailConteiner from "./conteiner/ItemDetailConteiner";

function App() {
  return (
    <div className="">
         <>
         <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route Path="/" element={<ItemListContainer/>}/>
                <Route Path="prueba" element={<ItemDetailConteiner/>}/>
                <Route path="/category/:id" element={<ItemListContainer></ItemListContainer>}/>
                </Routes>
        </BrowserRouter>
       </>
    </div>  
  );
}

export default App;
