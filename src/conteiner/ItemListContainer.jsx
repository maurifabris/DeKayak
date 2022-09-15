import React from 'react';
import Kayak from '../components/Kayak';
import { useEffect, useState } from 'react';
import customFetch from '../utils/CustomFetch';
import dataFromDB from '../utils/data'



const ItemListContainer = () => {

    const [data, setData] = useState([])


    useEffect(() => {
        customFetch(2000, dataFromDB)
            .then(result => setData(result))
            .catch(err => console.log(err))
        
    }, [data]);


    return (
        <div>
            {
                data.map(Item => (
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
