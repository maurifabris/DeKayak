import ItemDetail from "../components/ItemDetail";
import { useEffect, useState } from "react";
import customFetch from "../utils/CustomFetch";
import dataFromDB from "../utils/data"




const ItemDetailConteiner = ()  => {
    const [data, setData] = useState({});



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
