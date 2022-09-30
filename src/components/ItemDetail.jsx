import React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Link } from "react-router-dom"
import { CartContext } from './CartContext';
import { useContext } from 'react';
import dataFromDB from '../utils/data';

const ItemDetail = (data) => {

  const { addItem, deleteItem } = useContext(CartContext)

  const [add, setAdd] = useState(0)


  let HandleAdd = (data, add) => {
    if (data.stock >= add) {
      console.log(`agregaste , cantidad = ${add}`)
      setAdd(add + 1)
      onAdd(data, add)
    }
  }


  const onAdd = (data, add) => {
    addItem(data, add)
    setAdded(true);
  }

  const [added, setAdded] = useState(false)

  let HandleRemove = () => {
    if (add >= 1) {
      setAdd(add - 1)
    }
  }



  return (
    <div className="picture-container">
      <div className="picture">
        <img src={data.picture} />
      </div>
      <div className="picture-info">
        <h3>{data.name}</h3>
        <p>Descripcion: {data.description}</p>



        {added ? <Link to="/cart">Ir al carrito</Link> : <ButtonGroup variant="contained" aria-label="outlined primary button group">
          <Button onClick={() => HandleAdd(data)}>+</Button>
          <Button onClick={HandleRemove}>-</Button>
          <Button onClick={() => onAdd(add)}>Agregar {add} al carrito</Button>
        </ButtonGroup>
        }



      </div>
    </div>
  );
}

export default ItemDetail