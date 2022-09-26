import { createContext } from "react";
import { useState } from "react";
import React from 'react';


export const CartContext = createContext() 



const CartContextProvaider = ({children}) => {

    const [cartList, setCartList] = useState([ {
        name: "Kayak1",
        idCategory:1,
        description: "Muy bueno",
        picture: "https://click1.mercadolibre.com.ar/mclics/clicks/external/MLA/count?a=0MpFftL94wTANZEJDT8BFWF%2FdCVYLD9%2B4qNj7TEwai9aL5vFBHiSxNrn4Eu%2FDVrfiMtM5tIMKn5NTiOe0BAAT99%2BGfR0UR9VQqIIWQjdJ0Wqmo2j5vd7WEkB99vvgIPPNngbqeKdqlIjuMzLwvLFyGI1eW9pFb2eP38OgqmjQ6QwgRI9iVi1k%2FGQ4NTQ%2BH%2FJKHgmf1nUmN2k3HVjnxqmmqWB%2Bxovj1h%2BEqZppbzIG8Rxw5EbKaK1XiiJXaatutpuqxr5wCA%2FXcSPiH7p1SeKF%2BY6BmPRL8f2AO0CJf5ehRuMkn0veSaYpJE%2Ffqne34GfdoR5cjInIQEHX6maX9o3nukxU9zKK1jnZpz9YUO1J3fFYdFgVEGZ3BNc9AZHhvKAsvv2CdxN42y3a3h%2Fq1YNKuqkNxYvn105kRds0P8f2o%2B46%2B09mcqQko7Dgy0G7ceR6LxcuIGLxkDLWDIUIu9P%2BaVbM6TZsjhvxDonqORly3i5ILsHHPVVPXdUKDEzAXhot%2FykeWnDQgTpsvP6iS7HctR0E3iylwB%2FPWkX3vz%2BWJWvnpXdCe0qOczYU8h%2BoeANmta90LA3zUu5usx0GzhvhWsSbLDeUlRTZptbAcJTbOGpf2fx%2BqTazdTNEt9nQSmWRsRueTANLSDU%2FQwtS75dt2TpllVjD4gjxvvG1SrwMzLB5oty2sb703DApfospf2l3r7R%2Bjz1Ik%2BrVkpiUNS234jJWiJidzutTjjSMVWmWx1cSZyjBgqpunjGC69wvO03SR7Sv9%2Fah547HQK3i9De1VJjZxY1SI7OdalIY9GklA%3D%3D&rb=x",
        stock:12,
        id:1
    }]);

    const addItem = (product) => {
        setCartList([
            ...cartList,
            product 
        ])
    }

    return (
        
        <CartContext.Provider value={{cartList, addItem}}>
            {children}
        </CartContext.Provider>
        
    );
}

export default CartContextProvaider;
