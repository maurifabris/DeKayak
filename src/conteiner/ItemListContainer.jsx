import React from 'react';
import { useEffect, useState } from 'react';
import customFetch from '../utils/CustomFetch';
import dataFromDB from '../utils/data';
import { useParams } from 'react-router-dom';
import ItemDetail from '../components/ItemDetail';



const ItemListContainer = () => {

    const [data, setData] = useState([])
    const { idCategory } = useParams()

    useEffect(() => {
        if(idCategory){
            customFetch(2000, dataFromDB.filter(dataFromDB => dataFromDB.idCategory == idCategory))
            .then(result => setData(result))
            .catch(err => console.log(err))
        
    } else {
            customFetch(500, dataFromDB)
            .then(result => setData(result))
            .catch(err => console.log(err))
        
    }}, [idCategory]);



    return (
        <div>
            {
                data.map(item => (
                    <ItemDetail
                        key={item.name}
                        name={item.name}
                        description={item.description}
                        picture={item.description}
                        stock={item.stock}
                    />))
            }
        </div>
    );
}

export default ItemListContainer;
