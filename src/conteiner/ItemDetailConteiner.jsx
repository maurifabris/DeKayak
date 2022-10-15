import ItemDetail from "../components/ItemDetail";
import { useEffect, useState } from "react";

import { db } from "../utils/firebaseConfig"
import { useParams } from "react-router-dom";
import CircularColor from '../components/CircularProgressSizes';
import { doc, getDoc } from "firebase/firestore";

const ItemDetailConteiner = () => {

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState({})
    const { id } = useParams()


     useEffect(() => {

        const getProducto = async() =>  {
            // fetch for a product
            const  dataproduct = await getDoc(doc(db, "productos", id))
            return {
                id: dataproduct.id,
                ...dataproduct.data(),
                
            }
        }

        // useState to remove the spinner when the data is ready 
        setLoading(true)
        getProducto()
            .then(result => setData(result))
            .finally(() => setLoading(false))
    }, [id])



// render of the details of ech item
    return (
        <>
            {
                loading ?
                    <>
                        <CircularColor />

                    </>
                    :
                
                    <ItemDetail 
                    key= {data.name}
                    id={data.id}
                    name={data.name}
                    description={data.description}
                    picture={data.picture}
                    stock={data.stock}
                    price={data.price} 
                    
                    />

            }
        </>
    );
}

export default ItemDetailConteiner;
