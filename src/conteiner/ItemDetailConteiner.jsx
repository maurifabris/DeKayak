import ItemDetail from "../components/ItemDetail";
import { useEffect, useState } from "react";
import customFetch from "../utils/CustomFetch";

const {data, default: dataFromDB} = require('../utils/data')


const ItemDetailConteiner = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        customFetch(2000,dataFromDB[2])
        .then(result => setData(result))
        .catch(err => console.log(err))
     }, []);
    


    return (
        <div>
            <ItemDetail key={data.name}
             name={data.name}
             description={data.description} 
             picture={data.picture} 
             stock={data.stock}/>
        </div>
    );
}

export default ItemDetailConteiner;
