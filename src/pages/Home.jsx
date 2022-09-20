import ItemListContainer from "../conteiner/ItemListContainer"
import ItemDetailConteiner from "../conteiner/ItemDetailConteiner";
import NavBar from "../components/NavBar"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import React from 'react';

const Home = () => {
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route Path="/" element={<ItemListContainer/>}/>
                <Route Path="prueba" element={<ItemDetailConteiner/>}/>
                <Route path="/category/:id" element={<ItemListContainer></ItemListContainer>}/>
                </Routes>
        </BrowserRouter>
    );
}

export default Home;
