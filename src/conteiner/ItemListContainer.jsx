import React from 'react';
import Kayak from '../components/Kayak';
import { useEffect, useState } from 'react';





const ItemListContainer = () => {
    
 const [data, setData] = useState([])


useEffect(()=>{
    const dataFromDB = [
        {
            name: "Kayak1",
            description:"Muy bueno",
            picture:"../img/Kayak1",
        },
        {
            name: "Kayak2",
            description:"Muy bueno",
            picture:"../img/Kayak1",
        },
        {
            name: "Kayak3",
            description:"Muy bueno",
            picture:"../img/Kayak1",
        },
        {
            name: "Kayak4",
            description:"Muy bueno",
            picture:"../img/Kayak1",
        }
    ];
    setData(dataFromDB);
},[]);
















    return (
        <div>
            {
                data.map(Item =>( 
                    <Kayak
                    key={Item.name}
                    name={Item.name}
                    description={Item.description}
                    picture={Item.description}
                    />))
                }
        </div>
    );
}

export default ItemListContainer;
