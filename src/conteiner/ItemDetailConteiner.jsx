import ItemDetail from "../components/ItemDetail";
import { useEffect, useState } from "react";

import { db } from "../utils/firebaseConfig"
import { useParams } from "react-router-dom";
import CircularColor from '../components/CircularProgressSizes';
import { collection, doc, getDoc, query, where } from "firebase/firestore";

const ItemDetailConteiner = () => {

    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);


    useEffect(() => {
        setLoading(true)
        const docRef = doc(db, "productos", id);
        getDoc(docRef)
            .then(result => setData({
                id: result.id,
                ...result.data()
            }))
            .finally(() => setLoading(false))
    }, [id])



    return (
        <>
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
