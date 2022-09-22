import React from 'react';
import { useEffect, useState } from 'react';
import customFetch from '../utils/CustomFetch';
import dataFromDB from '../utils/data'
import { useParams } from 'react-router-dom';
import ItemDetail from '../components/ItemDetail';



const ItemListContainer = () => {

    const [data, setData] = useState([])
    const { id } = useParams()

    useEffect(() => {
        if(id){
            customFetch(2000, dataFromDB.filter(dataFromDB => dataFromDB.idCategory == id))
            .then(result => setData(result))
            .catch(err => console.log(err))
        
    } else {
            customFetch(500, dataFromDB)
            .then(result => setData(result))
            .catch(err => console.log(err))
        
    }}, [id]);

    return (
        <div>
            {
                data.map(Item => (
                    <ItemDetail
                        key={Item.name}
                        name={Item.name}
                        description={Item.description}
                        picture={Item.description}
                        stock={Item.stock}
                    />))
            }
        </div>
    );
}

export default ItemListContainer;
