import React from 'react';
import Kayak from '../components/ItemDetail';
import { useEffect, useState } from 'react';
import customFetch from '../utils/CustomFetch';
import dataFromDB from '../utils/data'
import { useParams } from 'react-router-dom';
    import { useParams } from 'react-router-dom';


const ItemListContainer = () => {

    const [data, setData] = useState([])
    const {id} = useParams()

    useEffect(() => {
        if(id){
            customFetch(2000, dataFromDB.filter(data.idCategory == id))
            .then(result => setData(result))
            .catch(err => console.log(err))
        
    } else {
            customFetch(2000, dataFromDB)
            .then(result => setData(result))
            .catch(err => console.log(err))
        
    }}, [id]);


    return (
        <div>
            {
                data.map(Item => (
                    <ItemListContainer
                        key={data.name}
                        name={data.name}
                        description={data.description}
                        picture={data.description}
                    />))
            }
        </div>
    );
}

export default ItemListContainer;
