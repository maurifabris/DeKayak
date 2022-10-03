import React from 'react';
import { useEffect, useState } from 'react';
import customFetch from '../utils/CustomFetch';
import dataFromDB from '../utils/data';
import { useParams } from 'react-router-dom';
import ItemDetail from '../components/ItemDetail';
import CircularColor from '../components/CircularProgressSizes';



const ItemListContainer = () => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const { idCategory } = useParams()

    useEffect(() => {
        setTimeout(() => {
            if (idCategory) {
                customFetch(dataFromDB.filter(dataFromDB => dataFromDB.idCategory == idCategory))
                    .then(result => {
                        setLoading(false)
                        setData(result)
                    }
                    )
                    .catch(err => console.log(err))

            } else {
                customFetch(dataFromDB)
                    .then(result => {
                        setLoading(false)
                        setData(result)
                    }
                    )
                    .catch(err => console.log(err))

            }
        }, 1000)
    }, [idCategory]);



    return (
        <>
            {
                loading ?
                    <>
                    <CircularColor/>
                    <p>ASAS</p>
                   </>
                    :
                    data.map(item => (
                        <ItemDetail
                            key={item.name}
                            id={item.id}
                            name={item.name}
                            description={item.description}
                            picture={item.picture}
                            stock={item.stock}
                            price={item.price}
                        />))
            }
        </>
    );
}

export default ItemListContainer;
