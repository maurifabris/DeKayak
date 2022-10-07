import ItemDetail from "../components/ItemDetail";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../utils/firebaseConfig"
import { useParams } from "react-router-dom";


const ItemDetailConteiner = ()  => {

    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);


    useEffect(() => {
        const firestoreFetch = async () => {
            // let q
            // if(id) { 
            //  q = query(collection(db, "/productos" + id), where("id", "==", parseInt(id)))
            // } else {
            //     q = query(collection(db, "/productos "))
            // }
            const querySnapshot = await getDocs(query(collection(db, "/productos "), where("id", "==", id ))); 
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

    }, [id]);

    return (
        <div>
            <ItemDetail
             key={data.id}
             id={data.id}
             name={data.name}
             description={data.description} 
             picture={data.picture}
             stock={data.stock}/>
        </div>
    );
}

export default ItemDetailConteiner;
