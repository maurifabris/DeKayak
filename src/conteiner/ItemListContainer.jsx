import React from 'react';
import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import ItemDetail from '../components/ItemDetail';
import CircularColor from '../components/CircularProgressSizes';
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../utils/firebaseConfig"

const ItemListContainer = () => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const { item } = useParams()

    useEffect(() => {
        const firestoreFetch = async () => {
            const q = query(collection(db, "/productos "))
            const querySnapshot = await getDocs(q);
            const dataFromFirestore = querySnapshot.docs.map(document => ({
                id: document.id,
                ...document.data()
            }))
            return dataFromFirestore
        }
        console.log(data)
        firestoreFetch()
            .then(result => setData(result))



            
            .then(() => setLoading(false))

    }, [item]);






    return (
        <>
            {
                loading ?
                    <>
                        <CircularColor />
                        <p>ASAS</p>
                    </>
                    :
                    data.map((item) => (
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
