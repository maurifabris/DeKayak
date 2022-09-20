import NavBar from "./components/NavBar"
import './App.css';
import Home from "./pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"


import ItemListContainer from "./conteiner/ItemListContainer";
import ItemDetailConteiner from "./conteiner/ItemDetailConteiner";

function App() {
  return (
    <div className="">
      <Home/>
    </div>
  );
}

export default App;
