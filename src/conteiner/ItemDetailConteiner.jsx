import ItemDetail from "../components/ItemDetail";
import { useEffect, useState } from "react";

import { db } from "../utils/firebaseConfig"
import { useParams } from "react-router-dom";
import CircularColor from '../components/CircularProgressSizes';
import { collection, doc, getDoc, query, where } from "firebase/firestore";

const ItemDetailConteiner = () => {

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState({})
    const { id } = useParams()


     useEffect(() => {

        const getProducto = async() =>  {

            const  dataproduct = await getDoc(doc(db, "productos", id))
            console.log(dataproduct)
            return {
                id: id,
                ...dataproduct.data(),
                
            }
        }


        setLoading(true)
        getProducto()
            .then(result => setData(result))
            .finally(() => setLoading(false))
    }, [id])




    return (
        <>
           { console.log(data)}
            {
                loading ?
                    <>
                        <CircularColor />

                    </>
                    :
                
                    <ItemDetail data={data}
                    />

            }
        </>
    );
}

export default ItemDetailConteiner;
