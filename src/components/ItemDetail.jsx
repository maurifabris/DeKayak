import React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Link } from "react-router-dom"
import ItemDetailConteiner from '../conteiner/ItemDetailConteiner';

const ItemDetail = ({ picture, name, description, stock }) => {


  const [add, setAdd] = useState(0)


  let HandleAdd = () => {
    if (stock >= add) {
      setAdd(add + 1)
    }
  }


  const onAdd = (count) => {
    console.log(`agregaste , cantidad = ${count}`)
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
        <img src={picture} />
      </div>
      <div className="picture-info">
        <h3>{name}</h3>
        <p>Descripcion: {description}</p>

        
          {added ? <Link to="/cart">Ir al carrito</Link> : <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button onClick={HandleAdd}>+</Button>
            <Button onClick={HandleRemove}>-</Button>
            <Button onClick={() => onAdd(add)}  >Agregar {add} al carrito</Button>
          </ButtonGroup>
}
        
        


      </div>
    </div>
  );
}

export default ItemDetail