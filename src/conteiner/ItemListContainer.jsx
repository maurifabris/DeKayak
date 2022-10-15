import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../components/ItemDetail';
import CircularColor from '../components/CircularProgressSizes';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../utils/firebaseConfig"



const ItemListContainer = () => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const { idCategory } = useParams()

    useEffect(() => {
        // fetch for firestore, its set data of the all product who categoryid is ecual to the section 
        const firestoreFetch = async () => {
            let q
            if(idCategory) { 
             q = query(collection(db, "productos"), where("idCategory", "==", parseInt(idCategory)))
            } else {
                q = query(collection(db, "productos"))
            }
            const querySnapshot = await getDocs(q);
            const dataFromFirestore = querySnapshot.docs.map(document => ({
                id: document.id,
                ...document.data()
            }))
            return dataFromFirestore
        }

        firestoreFetch()
            .then(result => setData(result))
            .then(() => setLoading(false))

    }, [idCategory]);






    return (
        <div className="conteiner"> 
            {
                loading ?
                    <>
                        <CircularColor />
                        
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
                            alt={data.alt}
                        />))
                        
                        
            }
       </div>
    );

        }
export default ItemListContainer;
